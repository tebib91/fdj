import mongoose, { Document } from "mongoose";

export interface ITeam extends Document {
  name: string;
  thumbnail: string;
  players: mongoose.Schema.Types.ObjectId[]; // Array of Player IDs (references)
}

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Players" }], // Reference to Player model (if applicable)
});

export const TeamModel = mongoose.model<ITeam>("teams", TeamSchema);

export const getTeams = async (): Promise<ITeam[] | null> => {
  try {
    return await TeamModel.find();
  } catch (err) {
    console.error("Error fetching teams:", err);
    return null; // Or handle error appropriately
  }
};

export const getTeamById = async (id: string): Promise<ITeam | null> => {
  try {
    return await TeamModel.findById(id);
  } catch (err) {
    console.error("Error fetching team by ID:", err);
    return null; // Or handle error appropriately
  }
};

export const getTeamsByLeagueId = async (
  id: string
): Promise<ITeam[] | null> => {
  try {
    // Assuming you have a way to link teams to a league (e.g., a 'leagueId' field)
    return await TeamModel.find({ leagueId: id });
  } catch (err) {
    console.error("Error fetching teams by league ID:", err);
    return null; // Or handle error appropriately
  }
};

export const getTeamByName = async (name: string): Promise<ITeam[] | null> => {
  try {
    return await TeamModel.find({
      name: { $regex: name, $options: "i" },
    });
  } catch (err) {
    console.error("Error fetching teams by name", err);
    return null; // Or handle error appropriately
  }
};
