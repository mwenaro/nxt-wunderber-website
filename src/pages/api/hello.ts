// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {  prisma } from "@/lib";

import { dbCon, sqCon } from "@/lib";
import { MysqlError } from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

// const getOrders = async () => await prisma.tourBooking.findMany();
// mongoDB.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 try {
const db = dbCon;
// perform a query
let data:any = [];
// db.query('SELECT * FROM user', (err: MysqlError, rows: any[]) => {
//   if (err) throw err;
//   console.log('Data received from database:\n');
//   // console.log(rows);
//   data = rows;
//   res.status(200).json({data});
// });
// const [rows, fields] = await db.execute('SELECT * FROM user');
// console.log({rows, fields})
sqCon.all('SELECT * FROM user', [], (err:any, rows) => {
  if (err) {
    // throw err;
    res.status(200).json({flag:false, error:err.message});
  }

  // Log the results to the console
  console.log(rows);
  res.json(rows);
  return;
});

// data = await sqCon.all('SELECT * FROM user');
// console.log(data)
// res.status(200).json({data});


  
 } catch (error:any) {
  res.status(500).json({flag:false, error:error.message});
 }
  // res.status(201).json(data);
}
