import { Request, Response, Router } from 'express'
import { prisma } from '../utils/prisma'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany()

  res.json({ tasks })
})

export default router
