import { getAll } from "@/models/TourBookingModel";
import { ContactMail } from "@/models/mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    try {
      let contactEmails = await ContactMail.find();
      res.status(200).json(contactEmails);
    } catch (error: any) {
      let contactEmails = await getAll('contact_email');
     

      contactEmails?res.status(200).json(contactEmails):res.status(500).json({ message: error.message });
    }
  }
}
