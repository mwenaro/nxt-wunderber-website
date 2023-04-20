import { pwdHasher, sqCon } from "@/lib";
import { rtrim } from "@/utils/trim";
import type { NextApiRequest, NextApiResponse } from "next";

//Get all

const selectQueryFormulator = (table:string,columns:string|string[]='',where:any={}) =>{
let columnz = Array.isArray(columns)?columns.join(','):columns;
let _where = rtrim(` WHERE ${Object.keys(where).join(' = ? AND ')}`,"AND")+' = ?';
return `SELECT ${columnz.length >0 ? columnz : '*'} FROM ${table} ${Object.keys(where).length > 0 ? _where : ''}`

}
export const getAll = async (table:string,columns:string|string[]='', where:any={}) => {

  return new Promise((resolve, reject) => {
    const sql = selectQueryFormulator(table,columns,where);
    const _where = Object.values(where)??[];

    
    sqCon.all(sql, _where, (err, rows) => {
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
export const getById = async (table:string,id: any) => {

  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM  ${table} WHERE id = ?`;
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
export const remove = async (table:string, id: any) => {

  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM  ${table} WHERE id = ?`;

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
export const update = async (table:string,id: any,columns:any) => {

  return new Promise((resolve, reject) => {
    // const sql = 'DELETE FROM  tour_booking WHERE id = ?';

    const sql = `UPDATE ${table} SET ${rtrim(Object.keys(columns).join(' = ?,'), ',')} = ? WHERE id = ?`;
    const _where = Object.values(columns)??[];
    _where.push(id);

   sqCon.run(sql, _where, function(err) {
      if (err) {
        reject(err);
        return;
      }
      // console.log(this)
      resolve(this.changes);
    });
  })
  .finally(() => {
   sqCon.close();
  });
}







//Post
export const create = async (
 table: string,
 data:any
) => {
  return new Promise((resolve, reject) => {

 let num = Object.keys(data).length;
  const sql = `INSERT INTO ${table} (${Object.keys(data).join(',')}) VALUES (${rtrim('?,'.repeat(num),',')})`;
//  console.log({sql})
//   return sql;
  sqCon.run(sql, [...Object.values(data)], function(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve(this.lastID);
  });
})
.finally(() => {
  sqCon.close();
});
  //

}

//Post
export const create2 = async (
 table: string,
 data:any
) => {
  // const data: any = JSON.parse(req.body);
  // res.json(data);
 

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
        // res.status(500).json({ msg: error.message, flag: false });
      } else {
        console.log(`tour_booking ${name} inserted successfully`);
        // res
        //   .status(200)
        //   .json({ msg: "TourBooking inserted succesfuly", flag: true });
      }
    }
  );
};
