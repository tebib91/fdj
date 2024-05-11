import { Request, Response } from "express";

import { getPlayersTeamId, getTeamById, getTeams } from "../models/teams";

export const getTeamsAll = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const teams = await getTeams();
    console.info(`Fetched ${teams?.length} Teams`);
    res.json(teams);
  } catch (error) {
    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    throw error;
  }
};

export const getTeamId = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const { id } = req.params;

  try {
    const team = await getTeamById(id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json(team);
  } catch (err) {
    console.error("Error fetching team by ID:", err);
    res.status(500).json({ message: "Error fetching team" });
  }
};

export const getPlayersByTeamId = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const { id } = req.params;
  try {
    const teams = await getPlayersTeamId(id);
    if (!teams) {
      return res.status(404).json({ message: "No team found" });
    }
    res.json(teams);
  } catch (err) {
    console.error("Error fetching teams by league ID:", err);
    res.status(500).json({ message: "Error fetching teams" });
  }
};
