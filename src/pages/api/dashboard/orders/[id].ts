// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

const getOrder = async (id: string) =>
  await prisma.tourBooking.findFirst({
    where: {
      id,
    },
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    // const {id} = JSON.parse()
  try {
    let data = await getOrder(JSON.parse(req.body).id);
    if (data) {
      res.status(200).json(data);
      return;
    }

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
