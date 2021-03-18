const express = require('express')
const router = express.Router()

const iconController = require('../../controllers/iconController')

router.route('/').get(iconController.find)
router.route('/').post(iconController.create)

module.exports = router
