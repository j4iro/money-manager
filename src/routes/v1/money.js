const express = require('express')
const router = express.Router()
// const verifyRequest = require('../../middlewares/verifyRequest')

// // Schemas
// const { userIdSchema } = require('../../middlewares/schemas/users')
const moneyController = require('../../controllers/moneyController')

router.route('/').get(moneyController.find)
router.route('/').post(moneyController.create)
router.route('/:id').put(moneyController.update)
router.route('/:id').delete(moneyController.remove)

module.exports = router
