// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {  prisma } from "@/lib";
import { sendConfirmationEmail } from "@/lib/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

// const getOrders = async () => await prisma.tourBooking.findMany();
// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 try {
const resp = await sendConfirmationEmail();
res.status(200).json(resp);
  
 } catch (error:any) {
  res.status(500).json({flag:false, error:error.message});
 }
  // res.status(201).json(data);
}
