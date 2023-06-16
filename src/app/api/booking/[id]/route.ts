import { deleteFromApi, getFromApi, putToApi } from "@/utils/fetch";


const apiRoute = "tours"

export async function GET(req: Request, {
    params,
}: {
    params: { id: string };
}) {


    try {
        const data = await getFromApi(apiRoute + '/' + params.id);

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




export async function PUT(req: Request, {
    params,
}: {
    params: { id: string };
}) {
    let body = await req.json();
   
    try {
        const data = await putToApi(apiRoute + '/' + params.id, body);
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

export async function DELETE(req: Request, {
    params,
}: {
    params: { id: string };
}) {
    try {
        const data = await deleteFromApi(apiRoute + '/' + params.id);

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