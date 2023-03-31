
import  {mongoDB} from "@/lib/mongoose";
import mongoose from "mongoose";

// Define a schema for your data
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a model based on the schema
const Watu = mongoose.model("Watu", userSchema);

export {Watu}
