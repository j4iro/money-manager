const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getDateUtc = require('../utils/getDateUtc')

const iconSchema = Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
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

module.exports = mongoose.model('Icon', iconSchema)
