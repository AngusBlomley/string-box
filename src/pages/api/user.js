import User from '@/models/user';
import { connectToServer } from 'lib/dbConnect';
import mongoose from 'mongoose';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    await connectToServer().catch(error => {
        console.error('Database connection failed', error);
        return res.status(500).json({ message: 'Database connection failed', error });
    });

    const session = await getSession({ req });
    if (!session) {
        console.error('No session available');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    console.log('Session data:', session); // Debugging, remove in production

    const { userId } = (req.method === 'POST' ? req.body : req.query);
    console.log('Requested userId:', userId);

    if (!userId || !mongoose.Types.ObjectId.isValid(userId) || (session.user.userId !== userId)) {
        console.error('Invalid or mismatched userId:', userId);
        return res.status(400).json({ message: 'Invalid userId provided or user mismatch' });
    }

    try {
        if (req.method === 'GET') {
            const user = await User.findById(userId);
            if (!user) {
                console.error('User not found, userId:', userId);
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } else if (req.method === 'POST') {
            if (!req.body.address) {
                console.error('Address data required but not provided');
                return res.status(400).json({ message: 'Address data is required' });
            }
            const user = await User.findByIdAndUpdate(
                userId,
                { $set: { address: req.body.address } },
                { new: true, runValidators: true }
            );
            if (!user) {
                console.error('User not found during update, userId:', userId);
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ message: 'Server error', error });
    }
}
