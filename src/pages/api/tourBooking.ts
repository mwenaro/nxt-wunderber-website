import type { NextApiRequest, NextApiResponse } from "next";
import { IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import { prisma } from "@/lib";
import { SU } from "@/constants";



const resp:{error:string|string,flag:boolean}={flag:false,error:""};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {participants, ...rest} = JSON.parse(req.body)
  const data = {...rest,...participants,userId:SU};

  if (req.method?.toLocaleLowerCase() === "post") {
    try {
      const createdBooking = await prisma.tourBooking.create({data})
      // console.log({createdBooking})
      if(createdBooking){
      const {error, flag} = await sendConfirmationEmail(JSON.parse(req.body).email,JSON.parse(req.body).fullName);
      res.status(200).json({...resp, flag:true,error:[...error] });
      return
      }
      let msg="There was an issue creating the user"
      res.status(200).json({...resp, flag:true,error:msg });
      // res.status(200).json({...resp})
      
    } catch (error) {
      res.status(201).json({msg:"There was an issue creating the user"})
    }
 
  } else {
  }
}
