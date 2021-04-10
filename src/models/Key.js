const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getDateUtc = require('../utils/getDateUtc')

const keySchema = Schema(
  {
    token: {
      type: String,
      required: true,
    },
    scopes: [
      {
      type: String,
      required: true,
    }
  ]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      currentTime: () => getDateUtc(),
    },
  }
)

module.exports = mongoose.model('Key', keySchema)
