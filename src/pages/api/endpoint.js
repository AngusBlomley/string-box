import cors from 'cors';
import runMiddleware from '../../store/middleware/runMiddleware';

const corsMiddleware = cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});

export default async function handler(req, res) {
    await runMiddleware(req, res, corsMiddleware);

    if (req.method === 'POST') {
        // Handle POST requests here
        res.status(200).json({ message: 'POST request handled' });
    } else if (req.method === 'GET') {
        // Handle GET requests here
        res.status(200).json({ message: 'GET request handled' });
    } else {
        // If the request method is not GET or POST, return a 405 Method Not Allowed error
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
