const { param } = require('express-validator')

const userIdSchema = param('id').isInt()

module.exports = {
  userIdSchema,
}
