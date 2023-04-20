// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {  prisma } from "@/lib";

import {sqCon } from "@/lib";
import { getAll } from "@/models/TourBookingModel";
import type { NextApiRequest, NextApiResponse } from "next";

// const getOrders = async () => await prisma.tourBooking.findMany();
// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 try {

// perform a query
let data:any = [];

let dat = await getAll('tour_booking');

res.status(200).json(dat);




  
 } catch (error:any) {
  res.status(500).json({flag:false, error:JSON.stringify(error.message)});
 }
  // res.status(201).json(data);
}
