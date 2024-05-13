// Importing Mongoose to handle database operations
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Make sure to install dotenv: npm install dotenv

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error("MongoDB connection URI is not set in environment variables.");
    process.exit(1);
}

const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1, // Server API settings can be adjusted here
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB!");
        const db = client.db("StringBoxV2"); // Assign the database object to a variable
        console.log("Database:", db); // Log the database object
        return { client, db }; // Return both the client and db instances
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

// Exporting connectToDatabase for use in other parts of the application
module.exports = { connectToDatabase };
