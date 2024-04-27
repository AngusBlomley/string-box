import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize CORS middleware with your desired options
const cors = initMiddleware(
    Cors({
        // Only allow requests with specified methods
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        // Configure your CORS settings here, such as allowed origins
        origin: process.env.ALLOWED_ORIGINS.split(","),
    })
);

export default cors;
