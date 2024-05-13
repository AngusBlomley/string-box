// pages/api/auth/refresh.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const refreshToken = req.cookies['refreshToken']; // Retrieve from cookies instead of body
    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token is required' });
    }

    try {
        const decoded = await verifyToken(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
        const newAccessToken = generateAccessToken(decoded.userId);

        // Optionally refresh the refresh token if it is near expiration or other conditions
        let newRefreshToken;
        if (shouldRefreshRefreshToken(decoded.exp)) {
            newRefreshToken = generateRefreshToken(decoded.userId);
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'Strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
        }

        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken || refreshToken // Return the old refreshToken if not refreshed
        });
    } catch (error) {
        console.error('Error verifying refresh token:', error);
        return res.status(403).json({ message: 'Invalid refresh token' });
    }
}
