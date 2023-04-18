// import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import { create, getAll, getById, remove, update } from "models/TourBookingModel";
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
  const { body } = req;
  const { participants, ...others } = JSON.parse(body);
  const data = {
    ...others,
    ...participants,
  };

  
  let result: { error: any; data: any; email: any; emailError: any } = {
    error: "",
    data: "",
    email: "",
    emailError: "",
  };


  if (req.method?.toLocaleLowerCase() === "post") {
    const name = data.fullName.trim().split(' ').pop();
    
    try {
      // const dat =   await getById(2);
 const dat =   await getAll();
//  const dat =   await remove(1);
//  const dat =   await update(2,{
//   phone:"071355", email:"new@gmail.com"
//  });
 console.log(dat)
 res.send(dat)
      
    } catch (error:any) {
      res.json({error:error.message})
    }
    // create(req,res);
    // getAll(req,res);

    return;
    
  

    try {
      const resp1 = await sendConfirmationEmail(process.env.NEXT_PUBLIC_EMAIL_USER,"Admin", "Booking Notification",`You have a booking notification from ${name} which is due on ${data.departureDate}. \n Kindly check and respond ASAP!`)
      const resp = await sendConfirmationEmail(data.email,name)
      // let resp = await mailSender(
      //   body.email,
      //   EMAIL_USER || "",
      //   "Booking Confirmation",
      //   `Dear ${name},
      //   Thank you for making reservation with us. Your booking has been received and confirmed.  
      //   Our representative will get back to you as soon as possible.\n\nBest regards,\n Wunderber Kenia Adventures.`
      // );
      
      let d = resp;
      result = { ...result, email: d };
    } catch (error:any) {
      
      result = { ...result, emailError: error.message };
      res.status(500).json(result);
    } finally {
      res.status(200).json(result);
      return;
    }

   
    //   } catch (error) {
    //     res.status(500).json({ msg: "An error", resul: { ...result, error } });
    //   }
    // } else {
    //   const tours = await prisma.tourBooking.findMany();
    // res.status(200).json(tours);
  }
}
