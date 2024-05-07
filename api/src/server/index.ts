import "dotenv/config";

import compression from "compression";
import cors from "cors";

import express from "express";
import { connectToDatabase } from "../config/db";
import leguesRoute from "../routes/leagues";

// Instantiate express
const server = express();
server.use(cors());
server.use(compression());

// Connect to sqlite
if (process.env.NODE_ENV !== "test") {
  connectToDatabase();
}

// server.use(cors());
server.use(express.json());

// Initialize routes middleware
server.use("/api/leagues", leguesRoute);

export default server;
