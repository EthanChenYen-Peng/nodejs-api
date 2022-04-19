import { createApp } from './server'
const PORT = 3000

function start() {
  const app = createApp()
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })
}
start()
