
import  {mongoDB} from "@/lib/mongoose";
import {Watu} from "@/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await mongoDB();
   await Watu.create({
    name:"Mwero",
    email:`mwero${Math.random()*1000}@mail.com`,
    password:"pwduser"
   }) ;
   let watu = await Watu.find();
   console.log({watu});
   res.status(200).json(watu)  ;
   return;
}
