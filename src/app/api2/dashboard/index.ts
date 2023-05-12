
import mongoDB from "@/lib/mongoose";
import { ContactMail, TourBooking, User } from "@/models/mongoose";
// import { ITourBooking } from "@/models/mongoose/TourBooking.model";
import type { NextApiRequest, NextApiResponse } from "next";

interface ITour {
  email: string,
  country: string,
  createdAt: Date
  departureDate: Date
}

type ITours = ITour[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method?.toLocaleLowerCase() === "get") {
    try {
      await mongoDB();
      const [Tours, Users, ConactMails, toursCountry] = await Promise.all([
        TourBooking.find().count(),
        User.find().count(),
        ContactMail.find().count(),
        TourBooking.find({})
      ]);

      // console.log({ data: byMonth(toursCountry) })

      res.status(200).json({ nums: { Tours, Users, ConactMails }, tours: byMonth(toursCountry)  });
      // res.send({data:"hello"})
    } catch (error: any) {
      console.log({ error: error.message });
      // return res.send({error:error.message});

      res.status(500).json({ message: error.message });
    }
  }
}


function byMonth(data: ITours) {
  let bookngPerMonth: any = {}
  data.forEach((booking) => {
    let newItem = { month: booking.createdAt.getMonth(), count: 1 }
    bookngPerMonth[newItem.month] ? ++bookngPerMonth[newItem.month]['count'] : bookngPerMonth[booking.createdAt.getMonth()] = newItem
  });
  let items: { month: number, count: number }[] = Object.values(bookngPerMonth);
  // console.log({ count: items.length })
  for (let i = 4 - items.length; i > 0; i--) {
    let month: number = items[0] ? (items[0].month - 1) : 3;

    let count = Math.random() * 50;
    // console.log({ i })
    items.unshift({ month: (month >= 0 ? month : 12 + month), count: Math.floor(count) })
  }

  // return Object.values(bookngPerMonth)
  return items;
}