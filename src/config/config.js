require('dotenv').config()

//uri mongo
let MONGO_URI = process.env.URL_MONGO_CONNECTION
if (process.env.NODE_ENV === 'test') {
  MONGO_URI = process.env.URL_MONGO_CONNECTION_TEST
}

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mainLogs: process.env.MAIN_LOGS || 'src/logs/default.log',
  errorLogs: process.env.ERROR_LOGS || 'src/logs/errors.log',
  maxSizeLogsFile: process.env.MAX_SIZE_LOGS_FILE || 512000,
  urlMongoConnection: MONGO_URI,

  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
}

module.exports = { config }
