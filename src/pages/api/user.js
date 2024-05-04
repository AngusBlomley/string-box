import User from '../../models/user';
import connectToDb from '../../lib/dbConnect';

export default async function handler(req, res) {
    await connectToDb();

    if (req.method === 'GET') {
        try {
            const user = await User.findById(req.query.userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
