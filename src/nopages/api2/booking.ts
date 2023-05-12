// import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import { create, getAll, getById, remove, update } from "@/models/TourBookingModel";
// import { prisma } from "@/lib";
// import mailSender from "@/utils/phpmailer";

// const guestDb = Database();
type Data =
  | {
      name: string;
    }
  | any;

type IResData = [Data | { err: any; code: any }] & {
  msg?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | IGuest[]>
) {
  const body: any = JSON.parse(req.body);
  // res.json(data);

  const {
    fullName: name,
    email,
    phone,
    country,
    tourDuration,
    departureDate,
    specialInterests,
    participants: { kids, infants, adults },
  } = body;
  const data = {name,email,phone,country,tourDuration,departureDate,specialInterests,kids,infants,adults}
  

  
  let result: { error: any; data: any; email: any; emailError: any } = {
    error: "",
    data: "",
    email: "",
    emailError: "",
  };
let table = "tour_booking";

  if (req.method?.toLocaleLowerCase() === "post") {
    const name = body.fullName.trim().split(' ').pop();
    
    try {
      // const dat =   await getById(table,2);
 const dat =   await getAll(table, ['id','name', 'phone']);
//  const dat = await create(table,data);
//  const dat =   await remove(table,5);
//  const dat =   await update(table,4,{
//   phone:"071355", email:"new@gmail.com",name:"Mwero A"
//  });
//  console.log(dat)
 res.send(dat)
      
    } catch (error:any) {
      console.log({error})
      res.json({msg:"AN error has ocuured"})
    }
    // create(req,res);
    // getAll(req,res);

    return;
    
  

    try {
      const resp1 = await sendConfirmationEmail(process.env.NEXT_PUBLIC_EMAIL_USER,"Admin", "Booking Notification",`You have a booking notification from ${name} which is due on ${data.departureDate}. \n Kindly check and respond ASAP!`)
      const resp = await sendConfirmationEmail(data.email,name)
   
      let d = resp;
      result = { ...result, email: d };
    } catch (error:any) {
      
      result = { ...result, emailError: error.message };
      res.status(500).json(result);
    } finally {
      res.status(200).json(result);
      return;
    }

   
   
  }
}