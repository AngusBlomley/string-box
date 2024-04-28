// store/middleware/cors.js
import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the cors middleware
const corsMiddleware = initMiddleware(
    Cors({
        // Options passed to cors:
        origin: process.env.ALLOWED_ORIGINS.split(","),
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true, // Enable if your frontend is on a different domain and you need cookies
    })
);

export default corsMiddleware;
