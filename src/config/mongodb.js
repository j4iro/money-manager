const mongoose = require('mongoose')
const { config } = require('./config')

const connect = mongoose.connect(config.urlMongoConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

module.exports = { connect: () => connect }
