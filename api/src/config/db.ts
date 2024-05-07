// config/db.ts

import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config(); // Load environment variables from .env file

const MONGODB_URI = process.env.MONGODB_URI as string;

export const connectToDatabase = async (): Promise<any> => {
  let client = mongoose;
  console.log({ MONGODB_URI });

  try {
    await client.connect(MONGODB_URI, {
      dbName: "fdj",
    });
    console.log("Connected to the database");
    return;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
