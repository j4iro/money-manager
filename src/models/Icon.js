const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

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
      currentTime: () => dayjs.utc().format(),
    },
  }
)

module.exports = mongoose.model('icon', iconSchema)
