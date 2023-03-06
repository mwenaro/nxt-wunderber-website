import { Database } from "../../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

const ordersDb = Database('guetsdb');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    ordersDb
      .find({})
      .then((docs: any) => {
        const {participants, ...rest} = docs;
      let d = {...rest, ...participants};
      console.log(docs, "in api/orders")
        res.status(200).json(d);
      })
      .catch((err:any)=>res.status(500).json({message:err?.message}));
  }
}
