import auth from '../../middleware/auth';
import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
    await dbConnect();
    auth(req, res, () => {
        // Protected route logic here
        res.status(200).json({ message: 'You are authenticated to see this.' });
    });
}
