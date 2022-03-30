import mongoose from 'mongoose'
import logger from './logger'
import { databaseHost, databasePort, databaseName } from './env'

const URI: string = `mongodb://${databaseHost}:${databasePort}/${databaseName}`

mongoose
  .connect(URI)
  .then((): void => {
    logger.info('MongoDB connected!')
  })
  .catch((error: Error): void => {
    logger.error('Error connecting MongoDB')
    logger.error(error.message)

    // Exit process with failure
    process.exit(1)
  })
