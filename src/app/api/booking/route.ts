
import { getFromApi, postToApi, putToApi } from "@/utils/fetch";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const apiRoute = "tours"

export async function GET(req: NextRequest) {
    try {
        const data = await getFromApi(apiRoute);
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ status: "failed", msg: error.message });
    }


}

export async function POST(req: Request) {
    const body = await req.json();

    try {
        const data = await postToApi(apiRoute, body);
        if (Object.hasOwn(data, 'error')) throw new Error(data.error);
        return new Response(JSON.stringify(data), {
            status: 201,
            statusText: "OK"
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ status: "failed", msg: error.message }), {
            status: 501,

        });

    }


}
export async function PUT(req: NextRequest) {
    const body = await req.json();
    console.log({body})
    try {
        const data = await putToApi(apiRoute+'/many', body);
        if (Object.hasOwn(data, 'error')) { console.log(data);throw new Error(data.error)};
        return new Response(JSON.stringify(data), {
            status: 201,
            statusText: "OK"
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ status: "failed", msg: error.message }), {
            status: 501,

        });

    }


}
export async function DELETE(req: NextRequest) {
    try {
        const data = await getFromApi(apiRoute);
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ status: "failed", msg: error.message });
    }


}