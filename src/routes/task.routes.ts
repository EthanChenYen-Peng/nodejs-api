import { Request, Response, Router } from 'express'
import validateResource from '../middleware/validateResource'
import { createTaskSchema } from '../schemas/task.schema'
import { prisma } from '../utils/prisma'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany()

  res.json({ tasks })
})

router.post(
  '/',
  validateResource(createTaskSchema),
  async (req: Request, res: Response) => {
    const title = req.body.title
    const description = req.body.description
    const task = await prisma.task.create({
      data: {
        title,
        description,
      },
    })

    res.status(201).json({ task })
  }
)

export default router
