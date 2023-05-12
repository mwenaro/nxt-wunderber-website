import { NextApiRequest, NextApiResponse } from "next";

const confirmationTokens:{token:string} = {token:'hello'}; // This is where we store the confirmation tokens

export default function handler(req: NextApiRequest,
    res: NextApiResponse<any>) {
  const { token ="" } = req.query;

  // Look up the email address associated with the token
//   const email = confirmationTokens[token];

  if (1) {
    // Remove the token from the confirmationTokens object
    // delete confirmationTokens[token];

    // TODO: Mark the user as confirmed in your database

    // Redirect the user to a confirmation page
    res.redirect('/confirmed');
  } else {
    res.status(400).send('Invalid confirmation token');
  }
}
