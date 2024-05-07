import mongoose, { Document, Schema } from "mongoose";

export interface ILeague extends Document {
  name: string;
  sport: string;
  teams: Schema.Types.ObjectId[];
}

const LeagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
});

export const LeagueModel = mongoose.model<ILeague>("leagues", LeagueSchema);

export const getLeagues = () => LeagueModel.find();
export const getLeagueById = (id: string) => LeagueModel.findOne({ id });
