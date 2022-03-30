import { Sequelize } from 'sequelize'
import { environment } from '../config/env'

const config = require('../config/database.js')[environment]

const sequelize = new Sequelize(config)

export { Sequelize, sequelize }
