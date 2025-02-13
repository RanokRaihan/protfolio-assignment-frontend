import mongoose from "mongoose";

let cachedDb: mongoose.Connection | null = null;

export async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  try {
    const connection = await mongoose.connect(uri);
    cachedDb = connection.connection;
    return cachedDb;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
