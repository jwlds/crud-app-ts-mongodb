import dotenv from 'dotenv';

dotenv.config();

const MONGODB_USERNAME = process.env.MONGODB_USERNAME || '';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || '';
const COLLECTION_NAME = process.env.COLLECTION_NAME || '';
const MONGODB_STRINGCONNECT = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.3tlotsp.mongodb.net/`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const config = {
    mongo: {
        username: MONGODB_USERNAME,
        password: MONGODB_PASSWORD,
        db_name: DB_NAME,
        collection: COLLECTION_NAME,
        url: MONGODB_STRINGCONNECT
    },
    server: {
        port: SERVER_PORT
    }
};