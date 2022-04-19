import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { configureEnv } from './utils/configEnv'
import taskRoutes from './routes/task.routes'

configureEnv()
const PORT = 3000
export const app = express()

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1/tasks', taskRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello form server')
})

export function start() {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })
}
