import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    // Get the token from the request header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Not authenticated.' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.userId; // Add the user ID to the request object for use in the next middleware/route
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

export default auth;
