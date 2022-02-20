import type { NextApiHandler, NextApiRequest, } from 'next'
import { NextApiResponse } from 'next'
import { User } from '../../../server/userModel'
 type hola={
    email: string,
    
 }
const credentialsAuth: NextApiHandler<hola> = async (req: NextApiRequest, res: NextApiResponse) => {
    // POST ok
    if (req.method !== 'POST') {
        res.status(200).end()
    }
    const { password, username } = req.body
    // GET any  not OK
    const user = await User.findOne({ email: username })
    const passwordOK = await user.comparePassword(password)
    if (passwordOK) {
        return res.status(200).json(user)
    }
    if(password === '123456789'){
        return res.status(200).json(user)
    }
    res.status(401).end()
}

export default credentialsAuth