
// import { get } from '@/app/routes/contact/get';
import mongoDB from '@/lib/mongoose';
import { ContactMail } from '@/models/mongoose';
import { getParams } from '@/utils/function';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {

        // await mongoDB();
        // let saved = ContactMail.find();
        const [, saved] = await Promise.all([mongoDB(), ContactMail.find()])
        return NextResponse.json(saved);
    } catch (error) {
        return NextResponse.json({ msg: "Error has occured" });
    }
}



export async function PUT(request: Request) {
    const id = getParams(request.url?.toString());

    return new Response('Hello, PUT')
}

export async function DELETE(request: Request) {

    const id = getParams(request.url?.toString());
    return new Response('Hello, DELETE')
}





