import express, { Request, Response } from 'express'

const PORT = 3000
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello form server')
})

export function start() {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })
}
