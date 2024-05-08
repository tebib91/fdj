import { Request, Response } from "express";
import { getLeagueByName, getLeagues } from "../models/leagues";

export const getLeaguesAll = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    // Create new service instance here
    const leagues = await getLeagues();
    console.info(`Fetched ${leagues.length} leagues`);
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

    // Perform the search query using regex for case-insensitive search
    const leagues = await getLeagueByName(searchTerm);

    if (!leagues) {
      // Log that no leagues were found
      console.info(`No leagues found matching '${searchTerm}'`);
      res.json([]); // Return an empty array as no leagues were found
      return;
    }
    console.info(`Found ${leagues} leagues matching '${searchTerm}'`);
    res.json(leagues);
  } catch (error) {
    console.error("Error searching leagues:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
