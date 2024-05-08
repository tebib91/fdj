import { Request, Response } from "express";

import { TeamModel, getTeams } from "../models/teams"; // Import Team model

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

export const getTeamById = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const { id } = req.params;
  try {
    const team = await TeamModel.findById(id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json(team);
  } catch (err) {
    console.error("Error fetching team by ID:", err);
    res.status(500).json({ message: "Error fetching team" });
  }
};

// Assuming you have a way to link teams to a league (e.g., a 'leagueId' field)
export const getTeamsByLeagueId = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const { leagueId } = req.params;
  try {
    const teams = await TeamModel.find({ leagueId });
    if (!teams) {
      return res
        .status(404)
        .json({ message: "No teams found for this league" });
    }
    res.json(teams);
  } catch (err) {
    console.error("Error fetching teams by league ID:", err);
    res.status(500).json({ message: "Error fetching teams" });
  }
};
