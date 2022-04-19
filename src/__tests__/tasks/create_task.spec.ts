import supertest, { Response } from 'supertest'
import { app } from '../../server'
import { prisma } from '../../utils/prisma'

describe('POST /api/v1/tasks', () => {
  describe('with valid params', () => {
    it('creates a new record', async () => {
      const params = { title: 'Task 1', description: 'Description 1' }
      const response: Response = await supertest(app)
        .post('/api/v1/tasks')
        .send(params)
      const newTask = await prisma.task.findFirst({
        where: { title: 'Task 1' },
      })

      expect(response.statusCode).toBe(201)
      expect(newTask).not.toBeNull()
    })
  })

  describe('when title is not given', () => {
    it.todo('returns with error')
  })
})
