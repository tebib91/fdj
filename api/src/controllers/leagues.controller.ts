import { Request, Response } from "express";
import { LeagueModel } from "../models/leagues";

export const getLeaguesAll = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    // Create new service instance here
    console.log("boh");

    const leagues = await LeagueModel.find();
    res.json(leagues);
  } catch (error) {
    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    throw error;
  }
};
