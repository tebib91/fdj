import { Request, Response } from "express";

import { getPlayers } from "../models/players";

export const getPlayersAll = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const players = await getPlayers();
    console.info(`Fetched ${players?.length} Players`);
    res.json(players);
  } catch (error) {
    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    throw error;
  }
};
