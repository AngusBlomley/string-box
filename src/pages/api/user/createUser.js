import User from '@/models/user';
import dbConnect from '@/lib/dbConnect';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ email, password: hashedPassword });
            await user.save();
            res.status(201).json({ success: true, message: 'User created successfully' });
        } catch (error) {
            res.status(400).json({ success: false, message: 'Error creating user' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
