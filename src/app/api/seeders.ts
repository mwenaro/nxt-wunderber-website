import { faker } from '@faker-js/faker';
import mongoDB from "@/lib/mongoose";
import { ContactMail, TourBooking, User } from "@/models/mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { pwdHasher } from '@/lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    for (let i = 1; i <= 5; i++) {
      const name = faker.name.findName();
      const email = faker.internet.email();
      const { hashedPassword, hashSalt } = pwdHasher('password');

      // await create('user', {name, email, password:hashedPassword, salt:hashSalt})
    }

  }




  try {
    await mongoDB();
    const [numTours, numUsers, numConactMails, toursCountry] = await Promise.all([
      TourBooking.count(),
      User.count(),
      ContactMail.count(),
      TourBooking.find({}, { email: 1, country: 1, createdAt: 1 })
    ]);

    res.status(200).json({ nums: { numTours, numUsers, numConactMails }, toursCountry });
    // res.send({data:"hello"})
  } catch (error: any) {
    console.log({ error: error.message });
    // return res.send({error:error.message});

    res.status(500).json({ message: error.message });
  }
}

