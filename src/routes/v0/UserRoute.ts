import express, { Request, Response } from 'express';
import { User as DbModel } from '../../models/mongoose';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        let created = await DbModel.find();

        return res.status(200).json(created);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }


})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        let tours = await DbModel.findById({ _id: req.params.id });

        return res.json(tours);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }


})

router.post('/', async (req: Request, res: Response) => {
    const { body } = req;
    try {
        let created = await DbModel.create(body);

        return res.json(created);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }


})
router.put('/:id', async (req: Request, res: Response) => {
    const { body } = req;

    try {
        let updated = await DbModel.updateOne({ _id: req.params.id }, { '$set': body });


        return res.json(updated);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }


})

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        let deleted = await DbModel.deleteOne({ _id: req.params.id });

        return res.json(deleted);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }


})

export default router;
