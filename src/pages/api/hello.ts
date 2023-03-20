// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

const getOrders = async () => await prisma.tourBooking.findMany();
// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let data = await getOrders();
  if (data) {
    res.status(200).json(data);
    return;
  }

  res.status(201).json(data);
}
