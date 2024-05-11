import { connectToServer, getDb } from '../../../lib/dbConnect';
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        await connectToServer();
        const db = getDb();
        const User = db.collection('users');

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await User.insertOne({ email, password: hashedPassword });

        res.status(201).json({ message: "User created.", user: { email } });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
}

export const signupUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/signup', userData);
        console.log("Signup response:", response.data);
        dispatch(userSignedUp(response.data));
    } catch (error) {
        console.error("Signup failed:", error);
        dispatch({
            type: 'USER_SIGNUP_FAILURE',
            payload: error.response ? error.response.data : { message: 'Signup failed' },
        });
    }
};
