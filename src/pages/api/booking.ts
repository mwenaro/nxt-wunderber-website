import {  Database, } from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { IGuest } from "@/types";
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
          .then((docs: any) =>
            res
              .status(200)
              .json([
                ...docs.filter((_doc: any) => _doc._id !== newDoc._id),
                newDoc,
              ])
          )
          .catch();
      })
      .catch((err: any) => console.log({ insert: "insert", err }));
  }
}
