import { mongoDB } from "@/lib/mongoose";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

/*mongoDB().then(()=>console.log("connection established !")).catch(error=>console.log('error has occurred '+ error.message));
 */

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
  let result: any[] = [201];
  try {
    let conn = await mongoDB();

    let created = await Watu.create({
      name: "Mwero",
      email: `mwero${Math.random() * 1000}@mail.com`,
      password: "pwduser",
    });

    result.push({ created, conn });
  } catch (err) {
    result.push(err);
  } finally {
    res.status(200).json(result);
  }
}
