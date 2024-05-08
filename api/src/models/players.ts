import mongoose, { Document } from "mongoose";

export interface IPlayer extends Document {
  name: string;
  position: string;
  thumbnail: string;
  signin: {
    amount: number;
    currency: string;
  };
  born: Date;
}

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String },
  thumbnail: { type: String },
  signin: {
    amount: { type: Number },
    currency: { type: String },
  },
  born: { type: Date },
});

export const PlayerModel = mongoose.model<IPlayer>("players", PlayerSchema);

export const getPlayers = async (): Promise<IPlayer[] | null> => {
  try {
    return await PlayerModel.find(); // Populate teams
  } catch (err) {
    console.error("Error fetching players:", err);
    return null; // Or handle error appropriately
  }
};

export const getPlayersByTeamId = async (
  id: string
): Promise<IPlayer[] | null> => {
  try {
    // Assuming you have a way to link teams to a league (e.g., a 'leagueId' field)
    return await PlayerModel.find({ teamId: id });
  } catch (err) {
    console.error("Error fetching teams by league ID:", err);
    return null; // Or handle error appropriately
  }
};
