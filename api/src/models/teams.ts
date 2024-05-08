import mongoose, { Document, Schema } from "mongoose";

export interface ITeam extends Document {
  name: string;
  thumbnail: string;
  players: Schema.Types.ObjectId[]; // Array of Player IDs (references)
}

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  players: [{ type: Schema.Types.ObjectId, ref: "players" }],
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

export const getPlayersTeamId = async (id: string): Promise<ITeam | null> => {
  try {
    return await TeamModel.findById(id).populate("players");
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
