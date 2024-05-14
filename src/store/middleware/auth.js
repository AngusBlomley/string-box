const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'] || '';
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Malformed token, Bearer token required' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = await verifyToken(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        const status = error.name === 'TokenExpiredError' ? 401 : 403;
        res.status(status).json({
            message: error.message,
            expiredAt: error.expiredAt || null,
        });
    }
};

export default authMiddleware;
