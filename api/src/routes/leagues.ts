import express from "express";

import {
  getLeaguesAll,
  searchLeagues,
} from "../controllers/leagues.controller";

const router = express.Router();

router.get("/all", getLeaguesAll);

router.get("/", searchLeagues);

export default router;
