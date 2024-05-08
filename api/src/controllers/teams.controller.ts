import { Request, Response } from "express";
import { getTeamId } from "../models/teams";

export const getTeamById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id as string;

    console.info(`Searching team with id '${id}'...`);

    // Perform the search query using regex for case-insensitive search
    const team = await getTeamId(id);

    if (!team) {
      // Log that no team were found
      console.info(`No team found matching '${id}'`);
      res.json(undefined); // Return an empty array as no team were found
      return;
    }
    console.info(`Found ${team} leagues matching '${id}'`);
    res.json(team);
  } catch (error) {
    console.error("Error searching team:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
