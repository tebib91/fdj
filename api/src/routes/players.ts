import { getPlayersAll } from "../controllers/players.controller";
import express from "express";

const router = express.Router();

router.get("/all", getPlayersAll);

export default router;
