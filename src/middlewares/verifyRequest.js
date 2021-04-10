const joi = require('joi')
const boom = require('@hapi/boom')

function validate(data, schema) {
  const { error } = joi.object(schema).validate(data, { abortEarly: false })
  return error
}

function verifyRequest(schema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema)

    // error ? res.status(400).json({ success: false, errors: error.details }) : next()
    error ? next(boom.badRequest(error)) : next()
  }
}

module.exports = verifyRequest
