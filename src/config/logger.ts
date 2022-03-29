import path from 'path'
import { createLogger, format, transports } from 'winston'
import { Format } from 'logform'
import { loggerLevel, environment } from './env'

const { combine, colorize, splat, timestamp, printf } = format
const name: string = `${environment}.log`

const logFormat: Format = printf(({ level, message, timestamp, ...metadata }): string => {
  let msg: string = `${timestamp} [${level}]: ${message}`
  if (Object.keys(metadata).length !== 0) {
    msg += JSON.stringify(metadata)
  }

  return msg
})

export default createLogger({
  transports: [
    new transports.File({
      maxFiles: 5,
      maxsize: 5120000,
      filename: path.join(__dirname, '..', 'logs', name),
      level: loggerLevel,
      format: combine(splat(), timestamp(), logFormat),
    }),
    new transports.Console({
      level: loggerLevel,
      handleExceptions: true,
      format: combine(splat(), timestamp(), colorize(), logFormat),
    }),
  ],
})
