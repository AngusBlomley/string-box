// pages/api/auth/refresh.js
import { verifyToken, generateAccessToken, generateRefreshToken } from '../../../../lib/jwtTokenUtils';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token is required' });
    }

    try {
        const decoded = await verifyToken(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
        const newAccessToken = generateAccessToken(decoded.userId);
        const newRefreshToken = generateRefreshToken(decoded.userId); // Optionally refresh the refresh token
        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        });
    } catch (error) {
        console.error('Error verifying refresh token:', error);
        return res.status(403).json({ message: 'Invalid refresh token' });
    }
}
