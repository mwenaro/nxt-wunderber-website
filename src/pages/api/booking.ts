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
  const responder = (err:any) => {
    
      console.log({ res: "res", err })
    res.send({msg:"An eror has occured!"})
    
  };

  // const resHandler = (input: IResData) => {
  //   const [rest, msg] = input;
  //   if (input.length>1) {
  //     console.log(rest.err);
  //     responder(msg ? msg : "An error has occured! ", rest.code);
  //   }
  //   responder(rest);
  // };

  console.log(req.method);
  console.log(req.body);
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
