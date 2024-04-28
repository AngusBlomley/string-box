require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
});

let dbConnection;

async function connectToServer() {
    if (!dbConnection) {
        try {
            await client.connect();
            dbConnection = client.db("StringBox");
            console.log("Successfully connected to MongoDB.");
            // Optionally, perform a simple test query to ensure the connection is valid
            const docs = await dbConnection.collection('users').find({}).limit(1).toArray();
            console.log("Connection test successful, document:", docs);
        } catch (err) {
            console.error("Failed to connect to MongoDB", err);
            throw err;  // This will allow the error to be caught by the caller
        }
    }
    return dbConnection;
}

function getDb() {
    if (!dbConnection) {
        throw new Error("No database connected!");
    }
    return dbConnection;
}

module.exports = {
    connectToServer,
    getDb,
};
