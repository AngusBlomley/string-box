import { connectToServer, getDb } from '../../../lib/dbConnect';
import User from '../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { email, password } = req.body;

    try {
        await connectToServer(); // Ensures the DB connection
        const db = getDb();
        const usersCollection = db.collection('users'); // Rename variable to avoid confusion with User model

        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email or password is incorrect.' });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Email or password is incorrect.' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token, userId: user._id.toString() }); // Convert ObjectId to string
    } catch (error) {
        console.error(error); // Log detailed error
        return res.status(500).json({ message: 'Logging in failed.', error: error.message });
    }
}

