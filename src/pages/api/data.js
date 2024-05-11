// pages/api/data.js
import { generateAccessToken, generateRefreshToken, verifyToken } from '../../lib/jwtTokenUtils';
import authMiddleware from '../../store/middleware/auth';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await authMiddleware(req, res, async () => {
                // Your protected route logic here
                res.status(200).json({ message: 'You have accessed a protected route!', user: req.user });
            });
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    } else if (req.method === 'POST' && req.url === '/api/token/refresh') {
        const { refreshToken } = req.body;
        try {
            const decoded = await verifyToken(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
            const newAccessToken = generateAccessToken(decoded.userId);
            const newRefreshToken = generateRefreshToken(decoded.userId);
            res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
        } catch (error) {
            res.status(403).json({ message: 'Invalid Refresh Token' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
