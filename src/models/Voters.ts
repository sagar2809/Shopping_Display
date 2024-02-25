import { Schema, models, model } from "mongoose";

const VotersSchema = new Schema({
  voterId: Number,
  name: String,
  gardian: String,
  area: String,
  date: String,
});

export const Voter = models.Voter || model("Voter", VotersSchema);
