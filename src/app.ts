import express, { Application } from 'express'
import './config/database'
import { port } from './config/env'
import logger from './config/logger'

// Initialize the app
const app: Application = express()

// Settings
app.set('port', port)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes

// Start the server
app.listen(app.get('port'), (): void => {
  logger.info(`Server on port ${app.get('port')}`)
})
