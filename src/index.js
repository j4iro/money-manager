const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
// Import database
const dbDatabase = require('./config/mongodb')
// Import Middlewares
const notFoundHandler = require('./middlewares/notFoundHandler')
const {
  errorHandler,
  logError,
  wrapErrors,
} = require('./middlewares/errorHandler')

// Utils
const { config } = require('./config/config')
const logger = require('./config/logger')

// Middlewares
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(helmet())

// Routes
app.use(require('./routes/index'))

// Connect Database
dbDatabase
  .connect()
  .then(() => logger.info('Database connected'))
  .catch((error) => logger.error('Error connect database %o', error))

// Catch 404 error
app.use(notFoundHandler)

//Errors Middleware
app.use(logError)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
  logger.info(`Listening http://localhost:${config.port}`)
})
