import { CreateOptions, DataTypes, Model } from 'sequelize'
import { /* Sequelize, */ sequelize } from './index'
import bcrypt from 'bcryptjs'

export interface UserAttributes {
  id: number
  firstName: string
  lastName?: string
  email: string
  password: string
}

export interface UserInstance {
  id: number
  firstName: string
  lastName?: string
  email: string
  password: string

  createdAt: Date
  updatedAt: Date
}

class User extends Model<UserAttributes> implements UserAttributes {
  id!: number
  createdAt!: Date
  updatedAt!: Date

  firstName!: string
  lastName?: string
  email!: string
  password!: string

  static associate(models: any) {
    // associations can be defined here
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
    hooks: {
      beforeCreate: (user: User, options: CreateOptions<UserAttributes>): void => {
        const salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(user.password, salt)
      },
    },
  },
)

export default User

// export = (sequelize: Sequelize, DataTypes: DataTypes) => {
//   const User = sequelize.define('User', {
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING
//   })

//   User.associate = function(models) {
//     // associations can be defined here
//   }

//   return User
// }
