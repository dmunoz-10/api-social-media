// Load env variables
require('dotenv').config()

// Database Config
const databaseHost = process.env.DATABASE_HOST || 'localhost'
const databasePort = parseInt(process.env.DATABASE_PORT, 10) || 5432
const databaseName = process.env.DATABASE_NAME || 'api_social_media'
const databaseUsername = process.env.DATABASE_USERNAME || ''
const databasePassword = process.env.DATABASE_PASSWORD || ''

module.exports = {
  development: {
    username: databaseUsername,
    password: databasePassword,
    database: `${databaseName}_development`,
    host: databaseHost,
    port: databasePort,
    dialect: 'postgres',
  },
  test: {
    username: databaseUsername,
    password: databasePassword,
    database: `${databaseName}_test`,
    host: databaseHost,
    port: databasePort,
    dialect: 'postgres',
  },
  production: {
    username: databaseUsername,
    password: databasePassword,
    database: `${databaseName}_production`,
    host: databaseHost,
    port: databasePort,
    dialect: 'postgres',
  },
}
