// Importing Mongoose to handle database operations
import mongoose from "mongoose";

// URI for connecting to MongoDB, typically from environment variables
const uri = process.env.MONGODB_URI;

// Initialize the MongoDB connection using Mongoose with appropriate settings
mongoose.connect(uri, {
    useNewUrlParser: true, // Uses the new URL parser, avoiding deprecation warnings
    useUnifiedTopology: true, // Uses MongoDB driver's new connection management engine
    serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds
    socketTimeoutMS: 45000 // Timeout for MongoDB socket operations after 45 seconds
}).then(() => console.log('MongoDB connected')) // Logs on successful connection
    .catch(err => console.log('Failed to connect to MongoDB', err)); // Catches and logs any connection errors

/**
 * Attempts to connect to MongoDB if no active connection exists.
 * If already connected, returns the existing connection.
 */
export async function connectToServer() {
    if (!mongoose.connection.readyState) {
        console.log("Attempting to connect to MongoDB...");
        return mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } else {
        console.log("Already connected to MongoDB.");
        return mongoose.connection;
    }
}

/**
 * Returns the existing MongoDB connection.
 * Throws an error if no connection is established.
 */
export function getDb() {
    if (!mongoose.connection) {
        throw new Error("No database connected!");
    }
    return mongoose.connection;
}
