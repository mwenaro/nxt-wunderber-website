// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TourBooking } from "@/models/mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

// const getOrder = async (id: string) => await TourBooking.findById(id);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {id} = req.query;
  try {
    // console.log({params:req});
    let result;
    switch (req.method?.toLocaleUpperCase()) {

      case 'DELETE':
        result =  await TourBooking.deleteOne({_id:id})
        
        break;
    
      default:
        result =  await TourBooking.findById(id);
        break;
    }
   
    




    if (result) {
      res.status(200).json(result);
      return;
    }

    res.status(201).json(result);
  } catch (error:any) {
    console.log({error:error.message});
    res.status(500).json({error:error.message});
  }
}
