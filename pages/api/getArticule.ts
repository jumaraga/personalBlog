import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'mongoose'
import { Articule } from '../../server/models'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const mongo = () => {
        connect(`${process.env.DB}`)
    }
    mongo();
    try {
        // const data = req.body
        const data = await
            Articule
                .findOne({ slug: req.body })
                .populate('userID')
                .exec()
        const hola = JSON.stringify(data)
        return res.status(200).json({ data })
    } catch (e) {
        console.log(e)
        res.status(400).json({ data: 'no se encontro' })
    }
}