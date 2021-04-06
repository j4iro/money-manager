const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getDateUtc = require('../utils/getDateUtc')

const moneySchema = Schema(
  {
    userId:{
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    comment: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['expense', 'improve'],
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

module.exports = mongoose.model('Money', moneySchema)
