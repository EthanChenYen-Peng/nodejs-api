import dotenv from 'dotenv'

const envFilePath = `.env.${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
}`

export function configureEnv() {
  dotenv.config({ path: envFilePath })
}
