import cors from 'cors';

// Initialize CORS middleware
const corsMiddleware = cors({
    origin: 'http://example.com', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers in the request
});

export default async function handler(req, res) {
    // Run CORS middleware
    await corsMiddleware(req, res);

    // Your API route logic here...
}
