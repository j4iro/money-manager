const express = require('express')
const router = express.Router()

const statsController = require('../../controllers/statController')

router.route('/').get(statsController.find)

module.exports = router
