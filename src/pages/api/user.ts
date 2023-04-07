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
let Watu:any;
if (mongoose.modelNames().includes('Watu')) {
  Watu = mongoose.model('Watu');
} else {
  Watu = mongoose.model('Watu', userSchema);
}



// export default User;

// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let result: any[] = [201];
  try {
    let conn = await mongoDB();

    let created = Watu.find()

    result.push({ conn, created });
   
  } catch (err:any) {
    result.push({err:err.message});
  } finally {
    res.status(200).json(result);
  }
}
