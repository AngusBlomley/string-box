import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const userSchema = new mongoose.Schema({
    name: { type: String, required: false },
    secondName: { type: String, required: false },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: { type: String, required: false },
    mobile: { type: String, required: false },
    address: [{
        addressLine1: { type: String, required: false },
        addressLine2: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        postalCode: { type: String, required: false },
        country: { type: String, required: false }
    }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    sessions: [{
        sessionId: {
            type: String,
            required: false,
            unique: false,
            index: false,
        },
        sessionDate: {
            type: Date,
            default: Date.now
        }
    }]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function mongooseConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB with Mongoose!");
    } catch (error) {
        console.error("Mongoose connection error:", error);
    }
}

async function getServerSideProps(context) {
    const token = context.req.cookies.token;

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return { props: {} };
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}


export { User, getServerSideProps, mongooseConnect };
