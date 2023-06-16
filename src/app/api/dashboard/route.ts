
import { getFromApi } from "@/utils/fetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const data = await getFromApi('dashboard');
        return NextResponse.json(data);
    } catch (error:any) {
        return NextResponse.json({status:"failed", msg:error.message});
    }


}