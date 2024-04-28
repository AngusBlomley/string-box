import auth from '../../store/middleware/auth';
import dbConnect from '../../../lib/dbConnect';

export default async function handler(req, res) {
    try {
        // Establish a database connection
        await dbConnect();

        // Use the auth middleware to protect the route
        auth(req, res, async () => {
            // Check the HTTP method, e.g., if it's a GET request
            if (req.method === 'GET') {
                // Perform your logic here, e.g., get data from the database
                const data = {}; // Replace with actual data retrieval logic
                res.status(200).json(data);
            } else {
                // If other methods are not supported, send a 405 Method Not Allowed
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
            }
        });
    } catch (error) {
        // Handle any errors that occurred during the above process
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
