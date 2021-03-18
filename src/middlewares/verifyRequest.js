const { validationResult } = require('express-validator')

function verifyRequest(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() })
  } else {
    next()
  }
}

module.exports = verifyRequest
