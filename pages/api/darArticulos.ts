import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'mongoose'
import { Articule } from '../../server/models'
import { User } from "../../server/userModel";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const mongo = () => {
        connect(`${process.env.DB}`)
    }
    mongo();
    try {
       const data =  await 
        Articule.find()
        .populate('userID')
        .exec()
        const hola = JSON.stringify(data)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(400).json({  e })
    }
}