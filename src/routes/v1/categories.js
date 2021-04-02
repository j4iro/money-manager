const express = require('express')
const router = express.Router()

const categoryController = require('../../controllers/categoryController')

router.route('/').get(categoryController.find)
router.route('/').post(categoryController.create)
router.route('/:id').put(categoryController.update)

module.exports = router
