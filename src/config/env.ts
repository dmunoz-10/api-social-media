import dotenv from 'dotenv'

// Load env variables
dotenv.config()

// Env
export const environment: string = process.env.ENVIRONMENT || 'development'
export const port: number = parseInt(process.env.PORT as string, 10) || 3000

// Logger
export const loggerLevel: string = process.env.LOGGER_LEVEL || 'debug'

// Database
export const databaseHost: string = process.env.DATABASE_HOST || 'localhost'
export const databasePort: number = parseInt(process.env.DATABASE_PORT as string, 10) || 5432
export const databaseName: string = process.env.DATABASE_NAME || 'api_social_media'
export const databaseUsername: string = process.env.DATABASE_USERNAME || ''
export const databasePassword: string = process.env.DATABASE_PASSWORD || ''
