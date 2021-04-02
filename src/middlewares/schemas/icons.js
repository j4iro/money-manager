const joi = require('joi')

const iconIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const iconPrefixSchema = joi.string().max(10)
const iconIconSchema = joi.string().max(80)

const createIconSchema = {
  prefix: iconPrefixSchema.required(),
  icon: iconIconSchema.required()
}

const updateIconSchema = {
  prefix: iconPrefixSchema,
  icon: iconIconSchema,
}

module.exports = {
  iconIdSchema,
  createIconSchema,
  updateIconSchema,
}
