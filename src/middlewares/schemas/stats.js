const joi = require('joi')
const dayjs = require('dayjs')

const statsMonthSchema = joi.number().min(1).max(12).default(dayjs().month())
const statsYearSchema = joi.number().min(1).default(dayjs().year())

const listStatsByMonthAndYearSchema = {
  month: statsMonthSchema.required(),
  year: statsYearSchema.required(),
}

module.exports = {
  listStatsByMonthAndYearSchema,
}