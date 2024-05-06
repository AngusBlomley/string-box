import User from '../../models/user';
import connectToDb from '../../../lib/dbConnect';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    await connectToDb();

    if (req.method === 'POST') {
        const { userId, name, email, mobile, address, password } = req.body;
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Update user details
            user.name = name ?? user.name;
            user.email = email ?? user.email;
            user.mobile = mobile ?? user.mobile;
            if (password) {
                user.password = await bcrypt.hash(password, 12);  // Re-hash the new password
            }

            await user.save();
            res.status(200).json({ message: 'User updated successfully', user });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
