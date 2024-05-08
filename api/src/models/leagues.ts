import mongoose, { Document, Schema } from "mongoose";

export interface ILeague extends Document {
  name: string;
  sport: string;
  teams: Schema.Types.ObjectId[];
}

const LeagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  teams: [{ type: Schema.Types.ObjectId, ref: "teams" }],
});

export const LeagueModel = mongoose.model<ILeague>("leagues", LeagueSchema);

export const getLeagues = async (): Promise<ILeague[] | null> => {
  try {
    return await LeagueModel.find(); // Populate teams
  } catch (err) {
    console.error("Error fetching leagues:", err);
    return null; // Or handle error appropriately
  }
};

export const getLeagueById = async (id: string): Promise<ILeague | null> => {
  try {
    console.log({ id });

    return await LeagueModel.findById(id); // Populate teams
  } catch (err) {
    console.error("Error fetching league by ID:", err);
    return null; // Or handle error appropriately
  }
};

export const getTeamLeagueById = async (
  id: string
): Promise<ILeague | null> => {
  try {
    console.log({ id });

    return await LeagueModel.findById(id).populate("teams"); // Populate teams
  } catch (err) {
    console.error("Error fetching league by ID:", err);
    return null; // Or handle error appropriately
  }
};

export const getLeagueByName = async (
  name: string
): Promise<ILeague[] | null> => {
  try {
    return await LeagueModel.find({
      name: { $regex: name, $options: "i" }, // Case-insensitive search
    }); // Populate teams
  } catch (err) {
    console.error("Error fetching leagues by name:", err);
    return null; // Or handle error appropriately
  }
};
