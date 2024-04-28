import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    console.log("Auth middleware called");
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        console.log("No token provided");
        return res.status(403).json({ message: 'Not authenticated.' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Token decoded successfully:", decodedToken);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        console.error("Invalid token:", error);
        res.status(401).json({ message: 'Invalid token.' });
    }
};
