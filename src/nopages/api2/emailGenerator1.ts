import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const confirmationTokens: any = {}; // This is where we store the confirmation tokens

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { email ="mweroabdalla@gmail.com" } = req.body;

  // Generate a unique confirmation token
  const token = uuidv4();
  confirmationTokens[token] = email;

  // Create a transport object for nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PWD,
    },
  });

  // Create the email message
  const message = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirm your email address",
    text: `Please click the following link to confirm your email address: http://localhost:3000/api/confirmEmail?token=${token}`,
  };

  // Send the email using nodemailer
  try {
    const info = await transporter.sendMail(message);
    console.log(`Email sent to ${email}: ${info.response}`);
    res.status(200).send("Confirmation email sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending confirmation email");
  }
}
