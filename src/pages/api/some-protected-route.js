import auth from '../../middleware/auth';

export default async function handler(req, res) {
    auth(req, res, () => {
        // Protected route logic here
        res.status(200).json({ message: 'You are authenticated to see this.' });
    });
}
