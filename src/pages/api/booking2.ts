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
  let table = "tour_booking";

  if (req.method?.toLocaleLowerCase() === "post") {
    const name = body.fullName.trim().split(" ").pop();

   

    try {
      await mongoDB();
      let saved = await TourBooking.create(data);
      const resp = await sendConfirmationEmail(data.email, name);

      result = {  email: resp , data:saved};
      res.status(200).json(result);
    } catch (error: any) {
      result = { error: error.message+" " };
      res.status(500).json(result);
    } 
  }
}
