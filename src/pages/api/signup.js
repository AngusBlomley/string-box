import dbConnect from '../../lib/dbConnect';
import User from '../../models/user';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();

    if (method === 'POST') {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required.' });
            }
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(422).json({ message: 'User already exists with that email.' });
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });
            const createdUser = await user.save();
            res.status(201).json({ message: 'User created!', user: createdUser });
        } catch (error) {
            res.status(500).json({ message: 'Could not create user.', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
