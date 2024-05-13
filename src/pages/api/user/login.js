const { connectToDatabase } = require('lib/dbConnect');

export default async function login(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        try {
            const { db } = await connectToDatabase();
            const user = await db.collection('users').findOne({ email });

            if (!user || user.password !== password) {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
                return;
            }

            // Here you would typically generate a session token or similar
            res.status(200).json({ success: true, message: 'Login successful', user });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
