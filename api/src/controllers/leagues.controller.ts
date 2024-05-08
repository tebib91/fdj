import { Request, Response } from "express";
import {
  getLeagueById,
  getLeagueByName,
  getLeagues,
  getTeamLeagueById,
} from "../models/leagues";

export const getLeaguesAll = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const leagues = await getLeagues();
    console.info(`Fetched ${leagues?.length} leagues`);
    res.json(leagues);
  } catch (error) {
    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    throw error;
  }
};

export const searchLeagues = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const searchTerm: string = req.query.name as string;
    console.info(`Searching leagues with name '${searchTerm}'...`);

    const leagues = await getLeagueByName(searchTerm);

    if (!leagues) {
      // Log that no leagues were found
      console.info(`No leagues found matching '${searchTerm}'`);
      res.json([]); // Return an empty array as no leagues were found
      return;
    }
    console.info(`Found ${leagues.length} leagues matching '${searchTerm}'`);
    res.json(leagues);
  } catch (error) {
    console.error("Error searching leagues:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getLeagueId = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const { id } = req.params;
  console.log({ id });

  try {
    const league = await getLeagueById(id); // Populate teams
    if (!league) {
      return res.status(404).json({ message: "League not found" });
    }
    res.json(league);
  } catch (err) {
    console.error("Error fetching league by ID:", err);
    res.status(500).json({ message: "Error fetching league" });
  }
};

export const getTeamsByLeagueId = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const { id } = req.params;
  console.log({ id });

  try {
    const league = await getTeamLeagueById(id); // Populate teams
    if (!league) {
      return res.status(404).json({ message: "League not found" });
    }
    res.json(league);
  } catch (err) {
    console.error("Error fetching league by ID:", err);
    res.status(500).json({ message: "Error fetching league" });
  }
};
