
import { mongoDB } from "@/lib";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

mongoDB();
// Define a schema for your data
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a model based on the schema
const Watu = mongoose.model("Watu", userSchema);

// export default User;

// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
   let created = await Watu.create({
    name:"Mwero",
    email:"mwero@mail.com",
    password:"pwduser"
   }) ;
   console.log(created) ;
   res.status(200).json({created})  ;
}
