import jwt from 'jsonwebtoken';

// Function to verify a token
export const verifyToken = (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};

// Function to generate an access token
export const generateAccessToken = (userId) => {
    return jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY });
};

// Function to generate a refresh token
export const generateRefreshToken = (userId) => {
    return jwt.sign({ userId: userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY });
};

