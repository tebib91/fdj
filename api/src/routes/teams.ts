import express from "express";

import { getTeamById } from "../controllers/teams.controller";

const router = express.Router();

router.get("/:id", getTeamById);

export default router;
