// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const orders = await prisma.tourBooking.findMany();

  res.status(200).json({  orders })

  } catch (error) {
    res.status(201).json({ error })
  }
  }
  
