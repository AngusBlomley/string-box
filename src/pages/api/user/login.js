import { connectToServer, getDb } from 'lib/dbConnect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { email, password } = req.body;

    try {
        console.log("Connecting to database...");
        await connectToServer();
        console.log("Database connected successfully.");

        const db = getDb();
        console.log("Fetching user from database...");
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ email });

        if (!user) {
            console.log("No user found for email:", email);
            return res.status(401).json({ message: 'Email or password is incorrect.' });
        }

        console.log("User found, checking password...");
        const isValid = await bcrypt.compare(password, user.password);
        console.log('bcrypt comparison result:', isValid);

        if (!isValid) {
            console.log("Password check failed.");
            return res.status(401).json({ message: 'Email or password is incorrect.' });
        }

        console.log("Password valid, generating tokens...");
        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }  // Short-lived access token
        );

        const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }  // Longer-lived refresh token
        );

        console.log("Tokens generated successfully, sending response...");
        return res.status(200).json({
            accessToken,
            refreshToken,
            user: {
                id: user._id.toString(),
                email: user.email,
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: 'Logging in failed.', error: error.message });
    }

}