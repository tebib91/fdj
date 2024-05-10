import "dotenv/config";

import compression from "compression";
import cors from "cors";

import express from "express";
import { connectToDatabase } from "../config/db";
import leguesRoute from "../routes/leagues";
import teamsRoute from "../routes/teams";
import PlayersRoute from "../routes/players";
import { logRequests } from "../middlewares/logger";

// Instantiate express
const server = express();
server.use(cors());
server.use(compression());

// Connect to sqlite
if (process.env.NODE_ENV !== "test") {
  connectToDatabase();
}

server.use(cors());
server.use(express.json());
server.use(logRequests);

// Initialize routes middleware
server.use("/api/leagues", leguesRoute);
server.use("/api/teams", teamsRoute);
server.use("/api/players", PlayersRoute);

export default server;
