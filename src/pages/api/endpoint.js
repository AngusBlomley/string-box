import cors from '../../middleware/cors';

export default async function handler(req, res) {
    // Run CORS before your route logic
    await cors(req, res);

    // Your API route logic here...
}
