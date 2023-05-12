import mongoDB from "@/lib/mongoose";
import { ContactMail } from "@/models/mongoose";
import { NextResponse } from "next/server";


export async function get() {
    try {
        await mongoDB();
        let saved:any = await ContactMail.find();
        NextResponse.json(saved);
      } catch (error) {
        NextResponse.json({ msg: "Error has occured" });
      }
}


