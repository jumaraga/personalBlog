// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'mongoose'
import { Articule } from '../../server/models'
import { getSession, useSession } from 'next-auth/react'
import { User } from '../../server/userModel'
type Data = {
  title?: String
  name: string
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  getSession({ req: req })
  const mongo = () => {
    connect(`${process.env.DB}`)
    console.log('Mongo connected', process.env.DB)
  }
  mongo();
  const { email } = req.body;
  const data = req.body;

  try {
    const user = await User.findOne({ email: email })
    const newArticule = new Articule({ ...data, userID: user._id });
    const savedArticule = await newArticule.save();
    return res.status(200).json({ savedArticule })
  } catch (e) {

    console.log(e)
  }
  res.status(200).json({ name: 'updated' })
}