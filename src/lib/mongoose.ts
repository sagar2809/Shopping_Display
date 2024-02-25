import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connections[0].readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return await mongoose.connect(process.env.DATABASE_URL || "");
}
