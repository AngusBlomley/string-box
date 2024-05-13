import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
require('events').EventEmitter.defaultMaxListeners = 20;
mongoose.connection.setMaxListeners(20);

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("MongoDB connection URI is not set in environment variables.");
    process.exit(1);
}

let isConnected = false;

async function connectToDatabase() {
    if (isConnected) {
        console.log("Already connected to MongoDB.");
        return;
    }

    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000
        });
        console.log("Connected to MongoDB with Mongoose!");
        isConnected = true;

        mongoose.connection.on('connected', () => {
            console.log("Mongoose connected to DB.");
            isConnected = true;
        });

        mongoose.connection.on('error', (err) => {
            console.error("Mongoose connection error:", err);
            isConnected = false;
        });

        mongoose.connection.on('disconnected', () => {
            console.log("Mongoose disconnected from DB.");
            isConnected = false;
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit the process with an error code
    }
}

export { connectToDatabase };
