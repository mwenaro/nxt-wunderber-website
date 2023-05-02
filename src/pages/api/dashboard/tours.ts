import { getAll } from "@/models/TourBookingModel";
import { TourBooking } from "@/models/mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    try {
      let tours = await TourBooking.find();
      res.status(200).json(tours);
      // res.send({data:"hello"})
    } catch (error: any) {
      console.log({error:error.message})
      // return res.send({error:error.message});
      let tours = await getAll('tour_booking');
     

      tours?res.status(200).json(tours):res.status(500).json({ message: error.message });
    }
  }
}
