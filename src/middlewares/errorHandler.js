const logger = require('../config/logger')
const { config } = require('../config/config')
const boom = require('@hapi/boom')

function withErrorStack(error, stack) {
  if (config.NODE_ENV !== 'production') {
    return { success: false, ...error, stack }
  }
  return { success: false, ...error }
}

function logError(err, req, res, next) {
  logger.error('%o', err)
  next(err)
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err))
  }

  next(err)
}

function errorHandler(err, req, res, next) /*eslint-disable-line*/ {
  const {
    output: { statusCode, payload },
  } = err

  // console.log(err)
  res.status(statusCode)
  res.json(withErrorStack(payload, err.stack))
}

module.exports = {
  logError,
  errorHandler,
  wrapErrors,
}
