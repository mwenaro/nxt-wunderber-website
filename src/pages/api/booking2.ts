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
      const resp = await sendConfirmationEmail(data.email, selectedName);

      result = {  email: resp , data:saved};
      res.status(200).json(result);
    } catch (error: any) {
      result = { error: error.message+" " };
      res.status(500).json(result);
    } 
  }else {
    try {
      await mongoDB();
      let saved = await TourBooking.find();
      res.status(200).json(saved);
    } catch (error) {
      console.log(error)
      res.status(200).json({ msg: "Error has occured" });
    }
  }
}
