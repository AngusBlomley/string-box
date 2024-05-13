import jwt from 'jsonwebtoken';
import User from '@/models/user';
import { connectToServer } from 'lib/dbConnect';
import { getSession } from 'next-auth/react';
import 'dotenv/config';

export default async function handler(req, res) {
    await connectToServer().catch(error => {
        console.error('Database connection failed', error);
        return res.status(500).json({ message: 'Database connection failed', error });
    });

    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ message: 'Unauthorized - Session Missing' });
    }

    const token = session.accessToken;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token Missing' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expired', expiredAt: error.expiredAt });
        } else {
            return res.status(403).json({ message: 'Invalid Token' });
        }
    }

    const { userId } = req.query;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId) || (session.user.userId !== userId)) {
        return res.status(400).json({ message: 'Invalid userId provided or user mismatch' });
    }

    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const refreshToken = process.env.REFRESH_TOKEN; // Load the refresh token from environment variable
    if (!refreshToken) {
        console.error('Refresh token not found in environment.');
        return res.status(500).json({ message: 'Server configuration error' });
    }

    res.cookie('next-auth.refresh-token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use environment condition
        sameSite: 'Strict',
        path: '/',
        maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    });

    res.status(200).json(user);
}
