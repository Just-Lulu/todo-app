import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI=your_mongodb_connection_string');
}

if (!MONGODB_DB) {
    throw new Error('MONGODB_DB=your_database_name');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // If we have a cached connection, return it
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    // Connect to cluster
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db(MONGODB_DB);

    // Set cache
    cachedClient = client;
    cachedDb = db;

    return { client, db };
}