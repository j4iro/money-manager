require('dotenv').config()

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mainLogs: process.env.MAIN_LOGS || 'src/logs/default.log',
  urlMongoConnection: process.env.URL_MONGO_CONNECTION || false,
}

module.exports = { config }
