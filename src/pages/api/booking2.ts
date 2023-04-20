// import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "@/models/TourBookingModel";
import { TourBooking } from "@/models/mongoose";
import mongoDB from "@/lib/mongoose";
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

  let result: { error: any; data: any; email: any; emailError: any } = {
    error: "",
    data: "",
    email: "",
    emailError: "",
  };
  let table = "tour_booking";

  if (req.method?.toLocaleLowerCase() === "post") {
    const name = body.fullName.trim().split(" ").pop();

   

    try {
      await mongoDB();
      let saved = await TourBooking.create(data);
      // saved = await TourBooking.find();
     
      const resp = await sendConfirmationEmail(data.email, name);

      result = { ...result, email: resp , data:saved};
      res.status(200).json(result);
    } catch (error: any) {
      result = { ...result, emailError: error.message };
      res.status(500).json(result);
    } 
  }
}
