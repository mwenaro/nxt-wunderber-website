import { pwdHasher, sqCon } from "@/lib";
import { pwdConfirm } from "@/lib/password";
import type { NextApiRequest, NextApiResponse } from "next";

//Get all
export const getAll = async(req: NextApiRequest, res: NextApiResponse<any>) => {
  sqCon.all("SELECT * FROM tour_booking", [], (err, rows) => {
    if (err) {
      res.status(500).json({ msg: err.message });
      throw err;
    }

    // Log the results to the console
    console.log(rows);
    res.json(rows);
  });
};
//Getby id
export const getById = async(req: NextApiRequest, res: NextApiResponse<any>) => {
  // const {id} = req.
  sqCon.all("SELECT * FROM tour_booking", [], (err, rows) => {
    if (err) {
      res.status(500).json({ msg: err.message });
      throw err;
    }

    // Log the results to the console
    console.log(rows);
    res.json(rows);
  });
};

//Post
export const create = async(req: NextApiRequest, res: NextApiResponse<any>) => {
  const data:any = JSON.parse(req.body);
  // res.json(data);
  if (req.method?.toLocaleLowerCase() !== "post" || !data) {
    return res.status(203).json({ msg: "Invalid request", flag: false });
  }

  const { fullName:name, email,phone,country, tourDuration, departureDate, specialInterests,participants:{kids, infants, adults}   } = data;

  // res.json({name, phone,country,email, adults, infants, kids, tourDuration, specialInterests, departureDate});
  

 await sqCon.run(
    `
    INSERT INTO tour_booking 
    (name,phone,country, email, adults, infants, kids, tourDuration, specialInterests, departureDate ) 
    VALUES (?,?,?, ?, ?,?,?,?,?,?)
  `,
    [name, phone,country,email, adults, infants, kids, tourDuration, specialInterests, departureDate],
    (error: any) => {
      if (error) {
        // console.error("Error inserting tour_booking: " + error.stack);
        console.log({error})
        res.status(500).json({ msg: error.message, flag: false });
      } else {
        console.log(`tour_booking ${name} inserted successfully`);
        res.status(200).json({ msg: "TourBooking inserted succesfuly", flag: true });
      }
    }
  );


};
