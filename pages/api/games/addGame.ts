// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addGame } from "../../../controllers/gameController"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
  res.status(200).json({ name: 'John Doe' })
}