import { pwdHasher, sqCon } from "@/lib";
import { pwdConfirm } from "@/lib/password";
import type { NextApiRequest, NextApiResponse } from "next";

//Get all

export const getAll = async () => {

  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM  tour_booking ';
    sqCon.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      if (!rows) {
        reject(new Error(`No entry was  found`));
        return;
      }
      resolve(rows);
    });
  })
  .finally(() => {
    sqCon.close();
  });
}

//get by id
export const getById = async (id: any) => {

  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM  tour_booking WHERE id = ?';
    sqCon.get(sql, [id], (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      if (!row) {
        reject(new Error(`No user with ID ${id} found`));
        return;
      }
      resolve(row);
    });
  })
  .finally(() => {
    sqCon.close();
  });
}
//delete by id
export const remove = async (id: any) => {

  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM  tour_booking WHERE id = ?';

  sqCon.run(sql, [id], function(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve(this.changes);
  });
})
.finally(() => {
  sqCon.close();
});
}
//update by id
export const update = async (id: any,{phone, email}:any) => {

  return new Promise((resolve, reject) => {
    // const sql = 'DELETE FROM  tour_booking WHERE id = ?';

    const sql = 'UPDATE tour_booking SET phone = ?, email = ? WHERE id = ?';
   sqCon.run(sql, [phone, email, id], function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.changes);
    });
  })
  .finally(() => {
   sqCon.close();
  });
}







//Post
export const create = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const data: any = JSON.parse(req.body);
  // res.json(data);
  if (req.method?.toLocaleLowerCase() !== "post" || !data) {
    return res.status(203).json({ msg: "Invalid request", flag: false });
  }

  const {
    fullName: name,
    email,
    phone,
    country,
    tourDuration,
    departureDate,
    specialInterests,
    participants: { kids, infants, adults },
  } = data;

  // res.json({name, phone,country,email, adults, infants, kids, tourDuration, specialInterests, departureDate});

  await sqCon.run(
    `
    INSERT INTO tour_booking 
    (name,phone,country, email, adults, infants, kids, tourDuration, specialInterests, departureDate ) 
    VALUES (?,?,?, ?, ?,?,?,?,?,?)
  `,
    [
      name,
      phone,
      country,
      email,
      adults,
      infants,
      kids,
      tourDuration,
      specialInterests,
      departureDate,
    ],
    (error: any) => {
      if (error) {
        // console.error("Error inserting tour_booking: " + error.stack);
        console.log({ error });
        res.status(500).json({ msg: error.message, flag: false });
      } else {
        console.log(`tour_booking ${name} inserted successfully`);
        res
          .status(200)
          .json({ msg: "TourBooking inserted succesfuly", flag: true });
      }
    }
  );
};
