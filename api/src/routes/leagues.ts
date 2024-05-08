import express from "express";

import {
  getLeagueId,
  getLeaguesAll,
  searchLeagues,
  getTeamsByLeagueId,
} from "../controllers/leagues.controller";

const router = express.Router();

router.get("/all", getLeaguesAll);
router.get("/:id/teams", getTeamsByLeagueId);
router.get("/:id", getLeagueId);

router.get("/", searchLeagues);

export default router;
