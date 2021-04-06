const joi = require('joi')

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const userNameSchema = joi.string().max(100)
const userEmailSchema = joi.string().email()
const userPasswordSchema = joi.string()
const userIsAdminSchema = joi.boolean()

const createUserSchema = {
  name: userNameSchema.required(),
  email: userEmailSchema.required(),
  password: userPasswordSchema.required(),
  isAdmin: userIsAdminSchema.required()
}

module.exports = {
  userIdSchema,
  createUserSchema,
}