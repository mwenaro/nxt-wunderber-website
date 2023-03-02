import { datastore } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { IGuest } from "@/types";

type Data =
  | {
      name: string;
    }
  | any;

type IResData = [Data | { err: any; code: any }] & {
  msg?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | IGuest[]>
) {
  



 
  if(req.method?.toLocaleLowerCase() === 'post'){


    
  datastore
    .insert(JSON.parse(req.body))
    .then(() => {
      datastore
        .find({})
        
        .then((doc: any) => res.status(200).json(doc))
        .catch();
    })
    .catch((err: any) => console.log({ insert: "insert", err }));
  }
  
}
