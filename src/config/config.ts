import { databaseHost, databaseName, databaseUsername, databasePassword } from './env'
import { Options } from 'sequelize'

interface config {
  [key: string]: Options
}

export default <config>{
  development: {
    username: databaseUsername,
    password: databasePassword,
    database: `${databaseName}_development`,
    host: databaseHost,
    dialect: 'postgres',
  },
  test: {
    username: databaseUsername,
    password: databasePassword,
    database: `${databaseName}_test`,
    host: databaseHost,
    dialect: 'postgres',
  },
  production: {
    username: databaseUsername,
    password: databasePassword,
    database: `${databaseName}_production`,
    host: databaseHost,
    dialect: 'postgres',
  },
}
