
import type { NextApiRequest, NextApiResponse } from 'next';
import { getParam } from '.';
import { AppAdmin as DbModel } from '../../models/mongoose';
import { NextRequest, NextResponse } from 'next/server';



export const getAll = async (req: NextRequest, res: NextResponse) => {
    try {
        let created = await DbModel.find();

        return NextResponse.json(created);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }


}

export const getById = async (req: NextRequest, res: Response) => {
    try {
        let tours = await DbModel.findById({ _id: getParam(req.url) });

        return NextResponse.json(tours);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }


}

export const create = async (req: NextRequest, res: Response) => {
    const { body } = req;
    try {
        let created = await DbModel.create(body);

        return NextResponse.json(created);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }


}

export const updateById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    // const reqss:NextApiRequest;
    // reqss.body


    try {

        let updated = await DbModel.updateOne({ _id: getParam(req.url as string) }, { '$set': body });


        return NextResponse.json(updated);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }


}

export const deleteById = async (req: NextRequest, res: Response) => {
    try {
        let deleted = await DbModel.deleteOne({ _id: getParam(req.url) });

        return NextResponse.json(deleted);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }


}




