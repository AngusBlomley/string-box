import mongoose from 'mongoose';
import { connectToServer, getDb } from '../../../lib/dbConnect';
import auth from '../../store/middleware/auth';

// Address Schema - ideally, this should be in a separate file under a models directory.
const addressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    firstName: String,
    lastName: String,
    mobile: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
}, { timestamps: true });


const Address = mongoose.models.Address || mongoose.model('Address', AddressSchema);

const handler = async (req, res) => {
    if (req.method === 'POST') {
        auth(req, res, async () => {
            try {
                await connectToServer();
                const db = getDb();
                const addressesCollection = db.collection('addresses');
                const addressData = { ...req.body, user: req.userId };
                const result = await addressesCollection.insertOne(addressData);
                if (result.acknowledged) {
                    res.status(201).json({ success: true, insertedId: result.insertedId });
                } else {
                    throw new Error("Document insertion failed");
                }
            } catch (error) {
                console.error('Database operation failed:', error);
                res.status(500).json({ error: 'Internal Server Error', details: error.message });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;