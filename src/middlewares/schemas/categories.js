const joi = require('joi')
const { createIconSchema } = require('./icons')

const categoryIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const categoryNameSchema = joi.string().max(30)
const categoryTypeSchema = joi.string().valid("expense", "improve")
const categoryIconSchema = joi.object({
  ...createIconSchema,
})

const createCategorySchema = {
  name: categoryNameSchema.required(),
  type: categoryTypeSchema.required(),
  icon: categoryIconSchema.required()
}

const updateCategorySchema = {
  name: categoryNameSchema,
  type: categoryTypeSchema,
  icon: categoryIconSchema,
}

module.exports = {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
}