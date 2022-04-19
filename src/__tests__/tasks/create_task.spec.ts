import supertest, { Response } from 'supertest'
import { createApp } from '../../server'
import { prisma } from '../../utils/prisma'

const app = createApp()

interface ErrorMessage {
  message: string
}
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
    it('returns with error', async () => {
      const params = { description: 'Description 1' }
      const response: Response = await supertest(app)
        .post('/api/v1/tasks')
        .send(params)

      const errorMessages = response.body.map((e: ErrorMessage) => e.message)
      expect(errorMessages).toContain('Title is required')
      expect(response.statusCode).toBe(400)
    })
  })

  describe('when description is not given', () => {
    it('returns with error', async () => {
      const params = { title: 'Title 1' }
      const response: Response = await supertest(app)
        .post('/api/v1/tasks')
        .send(params)

      const errorMessages = response.body.map((e: ErrorMessage) => e.message)
      expect(errorMessages).toContain('Description is required')
      expect(response.statusCode).toBe(400)
    })
  })
})
