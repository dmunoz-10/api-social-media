import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Post = model('post', PostSchema)

export default Post
