// import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import { TourBooking } from "@/models/mongoose";
import mongoDB from "@/lib/mongoose";




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | IGuest[]>
) {
  if (req.method?.toLocaleLowerCase() === "post") {
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
  const data = {
    name,
    email,
    phone,
    country,
    tourDuration,
    departureDate,
    specialInterests,
    kids,
    infants,
    adults,
  };

  let result: any;
  // let table = "tour_booking";


    const selectedName = body.fullName.trim().split(" ").pop();

   

    try {
      await mongoDB();
      let saved = await TourBooking.create(data);
      const reviewLink:string = `https://dev2.wunderber.com/dashboard/tours/${saved?._id||''}`;
      const toAdmin = await sendConfirmationEmail(process.env.NEXT_PUBLIC_EMAIL_USER,"Admin", "Booking Notification",reviewLink,`<p>You have a booking notification from ${name} which is due on ${data.departureDate}</p>. <p>Kindly check <a href="${reviewLink}">here </a>  and respond ASAP!</p>`)
      const toClient = await sendConfirmationEmail(data.email, selectedName,reviewLink);

      result = {  email: {toAdmin, toClient} , data:saved};
      res.status(200).json(result);
    } catch (error: any) {
      result = { error: error.message+" " };
      res.status(500).json(result);
    } 
  }else {
   
      res.status(200).json({ msg: "Error has occured" });

  }
}
