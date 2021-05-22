const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getDateUtc = require('../utils/getDateUtc')

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    icon: {
      icon: {
        type: String,
        required: true,
      },
      prefix: {
        type: String,
        required: true,
      },
    },
    type: {
      type: String,
      enum: ['expense', 'improve'],
    },
    custom: {
      type: Boolean,
      default: false,
      required: true,
    },
    user: {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      currentTime: () => getDateUtc(),
    },
  }
)

module.exports = mongoose.model('Category', categorySchema)
