import "dotenv/config";

import compression from "compression";
// import cors from "cors";

import express from "express";
import { connectToDatabase } from "../config/db";

// Instantiate express
const server = express();
server.use(compression());

// Connect to sqlite
if (process.env.NODE_ENV !== "test") {
  connectToDatabase();
}

// server.use(cors());
server.use(express.json());

// Initialize routes middleware
// server.use("/api/users", routes);

export default server;
