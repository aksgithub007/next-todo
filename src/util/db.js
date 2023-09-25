import mongoose from "mongoose";

export const db = () => {
  return mongoose.connect(process.env.Mongo_URI);
};
