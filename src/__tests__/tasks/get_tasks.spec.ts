import supertest, { Response } from 'supertest'
import { app } from '../../server'
import { prisma } from '../../utils/prisma'

describe('GET /api/v1/tasks', () => {
  beforeEach(async () => {
    await prisma.task.create({
      data: {
        title: 'Task 1',
        description: 'asdf',
      },
    })
  })
  it('returns ok', async () => {
    const response: Response = await supertest(app).get('/api/v1/tasks')
    expect(response.statusCode).toBe(200)
  })

  it('returns tasks', async () => {
    const response: Response = await supertest(app).get('/api/v1/tasks')
    const taskData = response.body
    expect(taskData['tasks']).toHaveLength(1)
  })
})
