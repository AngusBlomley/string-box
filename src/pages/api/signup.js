import User from '../../models/user';
import dbConnect from '../../lib/dbConnect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email, password } = req.body;
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const user = new User({ email, password: hashedPassword });
        await user.save();

        // Create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        // Send token to client
        res.status(201).json({ token });
    } else {
        // Handle any other HTTP method
        res.status(405).end();
    }
}
