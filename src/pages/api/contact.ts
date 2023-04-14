
import type { NextApiRequest, NextApiResponse } from "next";
import { EMAIL_USER, IGuest } from "@/types";

// import { prisma } from "@/lib";
import mailSender from "@/utils/phpmailer";
import { sendConfirmationEmail } from "@/lib/nodemailer";


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
    // try {
    //   const createdTour = await prisma.conactMail.create({
    //     data
    //   });
    //   result = { ...result, data: createdTour };
      
    // } catch (error:any) {
    //   result = { ...result,error: error.message };
    // }
    // res.json(result);
    // return;
    try {
      const name = data.fullName.trim().split(' ').pop();
      const resp1 = await sendConfirmationEmail(process.env.NEXT_PUBLIC_EMAIL_USER,"Admin",`Contact (${data.subject}) Notification` ,`You have contact notification from ${name} on ${data.subject}. \n Kindly check and respond ASAP!`)
      const resp = await sendConfirmationEmail(data.email,name,data.subject, `Dear ${name},\n
      Thank you for contacting us. Our representative will get back to you as soon as posible. \nBest regards,\n Wunderber Kenia Adventures.`)
      // let resp = await mailSender(
      //   data.email,
      //   EMAIL_USER || "",
      //   data.subject,
      //   `Dear ${name},
      //   Thank you for making reservation with us. Your booking has been received and confirmed.  `
      // );
      
      let d = resp;
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
