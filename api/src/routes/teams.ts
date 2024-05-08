import express from "express";

import {
  getTeamsAll,
  getPlayersByTeamId,
  getTeamId,
} from "../controllers/teams.controller";

const router = express.Router();

router.get("/all", getTeamsAll);
router.get("/:id/players", getPlayersByTeamId);
router.get("/:id", getTeamId);

export default router;
