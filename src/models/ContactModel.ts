import { pwdHasher, sqCon } from "@/lib";
import { pwdConfirm } from "@/lib/password";
import type { NextApiRequest, NextApiResponse } from "next";

//Get all
export const getAll = (req: NextApiRequest, res: NextApiResponse<any>) => {
  sqCon.all("SELECT * FROM contact_email", [], (err, rows) => {
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
export const getById = (req: NextApiRequest, res: NextApiResponse<any>) => {
  // const {id} = req.
  sqCon.all("SELECT * FROM contact_email", [], (err, rows) => {
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
export const login = (req: NextApiRequest, res: NextApiResponse<any>) => {
  // const {id} = req.
  const data = JSON.parse(req.body);
  if (req.method?.toLocaleLowerCase() !== "post" || !data) {
    return res.status(203).json({ msg: "Invalid request", flag: false });
  }

  const { email, password } = data;

  const sql = "SELECT * FROM contact_email WHERE email = ?";

  // Run the query and retrieve the contact_email row
  sqCon.get(sql, [email], (err, row: any) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ msg: err.message, flag: true });
    } else if (row) {
      console.log(row);
      if (pwdConfirm(password, row?.salt)) {
        res.status(200).json({ contact_email: row, flag: true });
      }
    } else {
      console.log(`No contact_email found with email ${email}`);
    }
  });

  // Log the results to the console
};

//Post
export const create = (req: NextApiRequest, res: NextApiResponse<any>) => {
  const data = JSON.parse(req.body);
  if (req.method?.toLocaleLowerCase() !== "post" || !data) {
    return res.status(203).json({ msg: "Invalid request", flag: false });
  }
  const { fullName :name, email:fro, subject, body } = JSON.parse(data);
  

  sqCon.run(
    `
    INSERT INTO contact_email (name, fro, subject, body) VALUES (?,?,?, ?),
  `,
    [name, fro, subject, body],
    (error: any) => {
      if (error) {
        console.error("Error inserting contact_email: " + error.stack);
        res.status(500).json({ msg: error.message, flag: false });
      } else {
        console.log(`contact_email ${name} inserted successfully`);
        res.status(200).json({ msg: "user inseted succesfuly", flag: true });
      }
    }
  );
};
