import express from "express";

import { getTeamById, getTeamsAll } from "../controllers/teams.controller";
import { getPlayersByTeamId } from "../models/players";

const router = express.Router();

router.get("/all", getTeamsAll);
router.get("/:idTeam", getTeamById);
router.get("/:idTeam/players", getPlayersByTeamId);

export default router;
