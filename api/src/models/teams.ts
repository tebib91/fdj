import mongoose, { Document, Schema } from "mongoose";

export interface ITeam extends Document {
  name: string;
  thumbnail: string;
  players: Schema.Types.ObjectId[];
}

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  players: [{ type: Schema.Types.ObjectId, ref: "Team" }],
});

export const TeamModel = mongoose.model<ITeam>("team", TeamSchema);

export const getTeams = () => TeamModel.find();
export const getTeamId = (id: string) => TeamModel.findOne({ _id: id });
export const getTeamByName = (name: string): Promise<ITeam[] | null> =>
  TeamModel.find({
    name: { $regex: name, $options: "i" },
  });
