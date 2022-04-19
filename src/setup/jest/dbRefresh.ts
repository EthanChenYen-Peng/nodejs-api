import { prisma } from '../../utils/prisma'

beforeEach(async () => {
  await prisma.task.deleteMany()
})
