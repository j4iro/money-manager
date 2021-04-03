const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')

//controllers
const statsController = require('../../controllers/statController')

//schemas
const { listStatsByMonthAndYearSchema } = require('../../middlewares/schemas/stats')

//routes
router.route('/').get(verifyRequest(listStatsByMonthAndYearSchema, "query"), statsController.find)

module.exports = router
