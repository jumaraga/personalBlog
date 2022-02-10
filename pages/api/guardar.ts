// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'mongoose'
import { Articule } from '../../server/models'
type Data = {
  title?: String
  name: string
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mongo=() => {
    
    connect(`${process.env.DB}`)
    console.log('Mongo connected', process.env.DB)
  }
  mongo();
  const data = req.body
  try {
    const newArticule = new Articule(data)
    const hola = await newArticule.save()
    return res.status(200).json({ hola })
  } catch (e) {
    
    console.log(e)
  }
  res.status(200).json({ name: 'updated' })
}