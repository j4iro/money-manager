const joi = require('joi')

function validate(data, schema) {
  const { error } = joi.object(schema).validate(data, {abortEarly: true})
  return error
}

function verifyRequest(schema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema)

    error ? res.status(400).json({ success: false, errors: error.details }) : next()
  }
}

module.exports = verifyRequest
