import { NextApiRequest, NextApiResponse } from "next";
import { connect } from 'mongoose'
import { User } from "../../server/userModel";
import { delBasePath } from "next/dist/shared/lib/router/router";
export default async function  signIn (req: NextApiRequest, res: NextApiResponse) {
    const mongo = () => {

        connect(`${process.env.DB}`)
        console.log('Mongo connected', process.env.DB)
    }
    mongo();

    const data = req.body

    try{
        const user = new User({
            ...data
        })
        const newuser = await user.save()
        console.log(newuser)
        return res.status(200).send(newuser)
    }catch(e){
        console.log(e)
    }

    
}