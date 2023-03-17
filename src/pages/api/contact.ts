import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";



const guestDb = Database();
type Data =
  | {
      name: string;
    }
  | any;

type IResData = [Data | { err: any; code: any }] & {
  msg?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | IGuest[]>
) {
  const {body} = req;

  if (req.method?.toLocaleLowerCase() === "post") {
    res.status(200).json({body:JSON.parse(body)})
  }
}
