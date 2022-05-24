import { MongoClient, ObjectId } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGO_URI);

let db;

try {
  const pool = await mongoClient.connect();
  db = pool.db(process.env.DATABASE);
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(error);
  process.exit();
}

export { db as default, ObjectId };
