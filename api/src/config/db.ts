// config/db.ts

import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const MONGODB_URI = process.env.MONGODB_URI as string;

let db: Db | null = null;

export const connectToDatabase = async (): Promise<Db | undefined> => {
  if (db) {
    return db;
  }

  const client = new MongoClient(MONGODB_URI, {});

  try {
    await client.connect();
    console.log("Connected to the database");
    db = client.db(); // Store the database connection for reuse
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
