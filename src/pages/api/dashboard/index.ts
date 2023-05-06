
import mongoDB from "@/lib/mongoose";
import { ContactMail, TourBooking, User } from "@/models/mongoose";
import { ITourBooking } from "@/models/mongoose/TourBooking.model";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    try {
      await mongoDB();
const tourByCountry = await (await TourBooking.find()).map(({country, email,createdAt}:ITourBooking)=>{country, email,createdAt})
      const [numTours, numUsers, numConactMails,toursCountry] = await Promise.all([
        TourBooking.count(),
        User.count(),
        ContactMail.count(),
        tourByCountry
      ]);

      res.status(200).json({ numTours, numUsers, numConactMails, toursCountry });
      // res.send({data:"hello"})
    } catch (error: any) {
      console.log({ error: error.message });
      // return res.send({error:error.message});

      res.status(500).json({ message: error.message });
    }
  }
}
