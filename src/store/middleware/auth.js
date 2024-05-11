// middleware/auth.js
const { verifyToken } = require('../../../lib/jwtTokenUtils');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'] || '';
        const tokenParts = authHeader.split(' ');

        if (tokenParts[0] !== 'Bearer' || tokenParts.length !== 2) {
            return res.status(401).json({ message: 'Malformed token, Bearer token required' });
        }

        const token = tokenParts[1];
        const decoded = await verifyToken(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        const status = error.name === 'TokenExpiredError' ? 401 : 403;
        return res.status(status).json({
            message: error.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token',
            expiredAt: error.expiredAt || null,
            error: error.message
        });
    }
};

module.exports = authMiddleware;
