
import  {mongoDB} from "@/lib/mongoose";
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
const Watu = mongoose.models.Watu||mongoose.model("Watu", userSchema);

// export default User;

// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await mongoDB();
   let created = await Watu.find();
  //  create({
  //   name:"Mwero",
  //   email:`mwero${Math.random()*1000}@mail.com`,
  //   password:"pwduser"
  //  }) ;
   
   console.log(created) ;
   res.status(200).json({created})  ;
    
  } catch (error:any) {
    res.status(500).json({msg:error.message})
    
  }
  
}
