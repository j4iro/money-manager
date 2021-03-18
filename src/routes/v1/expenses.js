const express = require('express')
const router = express.Router()
// const verifyRequest = require('../../middlewares/verifyRequest')

// // Schemas
// const { userIdSchema } = require('../../middlewares/schemas/users')
const expenseController = require('../../controllers/expenseController')

router.route('/').get(expenseController.find)

module.exports = router
