import { connectToDatabase } from 'lib/dbConnect';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    await connectToDatabase();

    switch (req.method) {
        case 'POST': // Create a new user
            try {
                const { username, email, password } = req.body;
                if (!username || !email || !password) {
                    return res.status(400).json({ message: 'Username, email, and password are required fields.' });
                }
                const hashedPassword = bcrypt.hashSync(password, 10);
                const newUser = new User({ username, email, password: hashedPassword });
                const savedUser = await newUser.save();
                res.status(201).json({ success: true, user: savedUser });
            } catch (error) {
                console.error('Error creating user:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
            break;

        case 'GET': // Fetch user details
            try {
                const { userId } = req.query;
                const user = await User.findById(userId);
                if (!user) {
                    return res.status(404).json({ message: 'User not found.' });
                }
                res.status(200).json(user);
            } catch (error) {
                console.error('Error fetching user:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
            break;

        case 'PUT': // Update user details
            try {
                const { userId } = req.query;
                const { address } = req.body;

                const user = await User.findById(userId);
                if (!user) {
                    return res.status(404).json({ message: 'User not found.' });
                }

                // Validate address fields
                const { addressLine1, addressLine2, city, state, postalCode, country } = address;
                if (!addressLine1 || !city || !state || !postalCode || !country) {
                    return res.status(400).json({ message: 'Please fill in all required address fields.' });
                }

                // Update address fields
                user.address = [{
                    addressLine1,
                    addressLine2,
                    city,
                    state,
                    postalCode,
                    country,
                }];

                const updatedUser = await user.save();
                res.status(200).json({ success: true, user: updatedUser });
            } catch (error) {
                console.error('Error updating user:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
            break;

        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
}
