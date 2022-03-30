import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)
  }

  next()
})

const User = model('user', UserSchema)

export default User
