import auth from '../../store/middleware/auth';
import dbConnect from '../../../lib/dbConnect';
import corsMiddleware from '@/store/middleware/cors';

export default async function handler(req, res) {
    console.log("Handler start", req.method);
    await corsMiddleware(req, res);

    try {
        await dbConnect();
        console.log("Database connected");

        await auth(req, res, async () => {
            if (req.method === 'POST') {
                console.log("POST method block");
                console.log("Auth passed for POST");
            } else if (req.method === 'GET') {
                console.log("GET method block");
                console.log("Auth passed for GET");
                const data = {};
                res.status(200).json(data);
            } else {
                console.log("Method not allowed block reached");
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
            }
        });
    } catch (error) {
        console.error("Error caught in handler:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
