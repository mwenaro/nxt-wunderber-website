import { getAll } from "@/models/TourBookingModel";
import { User } from "@/models/mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    try {
      let users = await User.find();
      res.status(200).json(users);
    } catch (error: any) {
      let users = await getAll('user');
     

      users?res.status(200).json(users):res.status(500).json({ message: error.message });
    }
  }
}
