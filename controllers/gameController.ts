import Games from '../models/Game';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
  }

export function addGame(req: NextApiRequest,
    res: NextApiResponse<Data>)
    {

    res.status(200).json({name: 'This worked'})
}

