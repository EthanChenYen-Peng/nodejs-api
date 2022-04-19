import supertest, { Response } from 'supertest'
import { app } from '../../server'

describe('GET /api/v1/tasks', () => {
  it('returns ok', async () => {
    const response: Response = await supertest(app).get('/api/v1/tasks')
    expect(response.statusCode).toBe(200)
  })
})
