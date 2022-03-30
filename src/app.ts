import express, { Application } from 'express'
import { port } from './config/env'
import logger from './config/logger'
import routes from './routes'

// Initialize the app
const app: Application = express()

// Settings
app.set('port', port)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
routes(app)

// Start the server
app.listen(app.get('port'), (): void => {
  logger.info(`Server on port ${app.get('port')}`)
})
