import { connectToServer, getDb } from '../../../lib/dbConnect';
import auth from '../../store/middleware/auth';
import mongoose from 'mongoose';

// Define the Address Schema
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

const Address = mongoose.models.Address || mongoose.model('Address', addressSchema);

// API handler for address operations
export default function handler(req, res) {
    // Ensure the user is authenticated before allowing any operations
    auth(req, res, async () => {
        await connectToServer();
        const db = getDb();
        if (req.method === 'POST') {
            // Handle creating or updating the user's address
            const addressesCollection = db.collection('addresses');
            const addressData = { ...req.body, user: req.userId };  // Link address to the user ID from the token
            const result = await addressesCollection.updateOne({ user: req.userId }, { $set: addressData }, { upsert: true });
            if (result.acknowledged) {
                res.status(201).json({ success: true, data: addressData });
            } else {
                throw new Error("Document insertion failed");
            }
        } else if (req.method === 'GET') {
            // Handle fetching the user's address
            const addressesCollection = db.collection('addresses');
            const address = await addressesCollection.findOne({ user: req.userId });
            if (address) {
                res.status(200).json(address);
            } else {
                res.status(404).json({ message: "Address not found" });
            }
        } else {
            res.setHeader('Allow', ['POST', 'GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
}
