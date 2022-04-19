import express, { Request, Response } from 'express'
import taskRoutes from './routes/task.routes'

const PORT = 3000
const app = express()

app.use('/api/v1/tasks', taskRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello form server')
})

export function start() {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })
}
