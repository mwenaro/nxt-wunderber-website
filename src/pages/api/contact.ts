
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";

import { prisma } from "@/lib";
import mailSender from "@/utils/phpmailer";


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
  const data= JSON.parse(body);
  
  let result: { error: any; data: any; email: any; emailError: any } = {
    error: "",
    data: "",
    email: "",
    emailError: "",
  };

  if (req.method?.toLocaleLowerCase() === "post") {
    try {
      const createdTour = await prisma.conactMail.create({
        data
      });
      result = { ...result, data: createdTour };
      
    } catch (error:any) {
      result = { ...result,error: error.message };
    }
    
    try {
      let resp = await mailSender(
        data.email,
        EMAIL_USER || "",
        data.subject,
        `Dear ${data.fullName}, \n
           This is to confirm that we have received your email, and we're working on it. We'll get back to you within 24 hours.   
            \nFeel free to reach us should you have any questions.\n\n
           
           Regards,\n
           \t Wunderber Kenia Adventures.
           `
      );
      
      let d = await resp.json();
      result = { ...result, email: d };
    } catch (error:any) {
      
      result = { ...result, emailError: error.message };
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
