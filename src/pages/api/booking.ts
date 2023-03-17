import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import { prisma } from "@/lib";
import mailSender from "@/utils/phpmailer";

const guestDb = Database();
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
    try {
      const createdTour = await prisma.tourBooking.create({
        data,
      });

      result = { ...result, data: createdTour };
      try {
        mailSender(
          body.email,
          EMAIL_USER || "",
          "Booking Confirmation",
          `Dear ${data.fullName}, \n
           This is to confirm that you have booked for tour with is which \n
           is due on ${data.departureDate}. \n
           Feel free to reach us should you have any questions.\n\n
           
           Regards,\n
           \t Wunderber Kenia Adventures.
           `
        )
          .then((res) => res.json())
          .then((data2) => {
            result = { ...result, email: data2 };
          });
      } catch (error) {
        console.log(error);
        console.log(error);
        result = { ...result, emailError: error };
      }

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ msg: "An error", resul: { ...result, error } });
    }
  } else {
    const tours = await prisma.tourBooking.findMany();
    res.status(200).json(tours);
  }
}
