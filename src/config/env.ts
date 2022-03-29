import dotenv from 'dotenv'

// Load env variables
dotenv.config()

// Env
export const environment: string = process.env.ENVIRONMENT || 'development'
export const port: number = parseInt(process.env.PORT as string, 10) || 3000

// Logger
export const loggerLevel: string = process.env.LOGGER_LEVEL || 'debug'
