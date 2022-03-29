import { Sequelize } from 'sequelize'
import { environment } from '../config/env'
import credentials from '../config/config'

const config = credentials[environment]

const sequelize = new Sequelize(config)

export { Sequelize, sequelize }
