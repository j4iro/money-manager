const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')

//controllers
const moneyController = require('../../controllers/moneyController')

//schemas
const {
  moneyIdSchema,
  createMoneySchema,
  updateMoneySchema} = require('../../middlewares/schemas/money')

//routes
router.route('/').get(moneyController.find)

router.route('/').post(verifyRequest(createMoneySchema), moneyController.create)

router
  .route('/:id')
  .put(
    verifyRequest({ id: moneyIdSchema }, 'params'),
    verifyRequest(updateMoneySchema),
    moneyController.update
  )

router.route('/:id').delete(verifyRequest({ id: moneyIdSchema }, "params"), moneyController.remove)

module.exports = router
