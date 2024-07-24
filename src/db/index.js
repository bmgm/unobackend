import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./env",
});

const connectDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected!! DB_Host:${con.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};
export default connectDB;
