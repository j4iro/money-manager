const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')
const scopesValidationHandler = require('../../middlewares/scopesValidationHandler')

//controllers
const moneyController = require('../../controllers/moneyController')

//schemas
const {
  moneyIdSchema,
  createMoneySchema,
  updateMoneySchema,
} = require('../../middlewares/schemas/money')

//routes
router
  .route('/')
  .post(
    scopesValidationHandler(['create:money']),
    verifyRequest(createMoneySchema),
    moneyController.create
  )

router
  .route('/:id')
  .put(
    scopesValidationHandler(['update:money']),
    verifyRequest({ id: moneyIdSchema }, 'params'),
    verifyRequest(updateMoneySchema),
    moneyController.update
  )

router
  .route('/:id')
  .delete(
    scopesValidationHandler(['delete:money']),
    verifyRequest({ id: moneyIdSchema }, 'params'),
    moneyController.remove
  )

module.exports = router
