import * as mongoDB from "mongodb";
import {config} from '../config/index'
import ChalkLog from "../library/ChalkLog";


export const collections: { users?: mongoDB.Collection } = {}

export async function connectToDatabase () {

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(config.mongo.url);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(config.mongo.db_name);
   
    const usersCollection: mongoDB.Collection = db.collection(config.mongo.collection);
 
  collections.users = usersCollection;
       
         ChalkLog.info(`Database: ${db.databaseName} Collection: ${usersCollection.collectionName}`);
 }