const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')
const scopesValidationHandler = require('../../middlewares/scopesValidationHandler')

//controllers
const statsController = require('../../controllers/statController')

//schemas
const {
  listStatsByMonthAndYearSchema,
} = require('../../middlewares/schemas/stats')

//routes
router
  .route('/')
  .get(
    scopesValidationHandler(['read:money']),
    verifyRequest(listStatsByMonthAndYearSchema, 'query'),
    statsController.find
  )

module.exports = router
