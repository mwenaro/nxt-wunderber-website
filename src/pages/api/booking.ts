// import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";
// import { prisma } from "@/lib";
import mailSender from "@/utils/phpmailer";

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
    const name = data.fullName.trim().split(' ').pop();
  

    try {
      let resp = await mailSender(
        body.email,
        EMAIL_USER || "",
        "Booking Confirmation",
        `Dear ${name},
        Thank you for making reservation with us. Your booking has been received and confirmed.  
        Our representative will get back to you as soon as possible.\n\nBest regards,\n Wunderber Kenia Adventures.`
      );
      
      let d = await resp.json();
      result = { ...result, email: d };
    } catch (error:any) {
      
      result = { ...result, emailError: error.message };
      res.status(500).json(result);
    } finally {
      res.status(200).json(result);
      return;
    }

   
    //   } catch (error) {
    //     res.status(500).json({ msg: "An error", resul: { ...result, error } });
    //   }
    // } else {
    //   const tours = await prisma.tourBooking.findMany();
    // res.status(200).json(tours);
  }
}
