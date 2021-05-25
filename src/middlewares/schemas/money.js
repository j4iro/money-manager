const joi = require('joi').extend(require('@joi/date'))

// Other schemas
const { createCategorySchema } = require('./categories')

const moneyIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const moneyDateSchema = joi.date().format('YYYY-MM-DD')
const moneyAmountSchema = joi.number().min(1)
const moneyCategorySchema = joi.object({
  ...createCategorySchema,
})

const createMoneySchema = {
  date: moneyDateSchema.required(),
  amount: moneyAmountSchema.required(),
  category: moneyCategorySchema.required(),
}

const updateMoneySchema = {
  date: moneyDateSchema,
  amount: moneyAmountSchema,
  category: moneyCategorySchema,
}

module.exports = {
  moneyIdSchema,
  createMoneySchema,
  updateMoneySchema,
}
