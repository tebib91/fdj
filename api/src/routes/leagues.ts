import express from "express";

import { getLeaguesAll } from "../controllers/leagues.controller";
// import { getLeagueById } from "../controllers/leagues.controller";

const router = express.Router();

router.get("/all", getLeaguesAll);

// router.get("/:id", getLeagueById);

export default router;
