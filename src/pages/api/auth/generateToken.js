import jwt from 'jsonwebtoken';

// Function to generate a token for a user
export default function generateToken(user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}
