import { Database } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { IGuest } from "@/types";
import { sendConfirmationEmail } from "@/lib/nodemailer";



const guestDb = Database();
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
  if (req.method?.toLocaleLowerCase() === "post") {
    guestDb
      .insert(JSON.parse(req.body))
      .then((newDoc: any) => {
        guestDb
          .find({})
          .then(async (docs: any) =>{
             const {error:er, flag} = await sendConfirmationEmail(JSON.parse(req.body).email,JSON.parse(req.body).fullName);
             res.json({emailRes:{error:er,flag}});
             return
            res
              .status(200)
              .json([
                ...docs.filter((_doc: any) => _doc._id !== newDoc._id),
                newDoc,{emailRes:{error:er,flag}}
              ])
            })
          .catch();
      })
      .catch((err: any) => console.log({ insert: "insert", err }));
  } else {

  guestDb
    .find({})
    .then((docs: any) => res.status(200).json(docs))
    .catch((err: any) => res.status(401).json(err));
  }
}
