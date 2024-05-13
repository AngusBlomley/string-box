const { connectToDatabase } = require('lib/dbConnect');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        try {
            const { db } = await connectToDatabase();

            // Check if the db object is defined
            if (!db) {
                throw new Error('Database connection not established');
            }

            // Check if a user with the same email or username already exists
            const existingUser = await db.collection('users').findOne({ $or: [{ email }, { username }] });
            if (existingUser) {
                return res.status(409).json({ success: false, message: 'User already exists' });
            }

            // Insert the user document into the 'users' collection
            const result = await db.collection('users').insertOne({ username, email, password });
            return res.status(201).json({ success: true, message: 'User created', userId: result.insertedId });

        } catch (error) {
            console.error('Error creating user:', error); // Log the error details
            return res.status(500).json({ success: false, message: 'Error creating user' });
        }
    } else {
        console.error('Method Not Allowed'); // Log when an unsupported HTTP method is used
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}

