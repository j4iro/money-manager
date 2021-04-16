const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')

// controllers
const categoryController = require('../../controllers/categoryController')

// schemas
const {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
} = require('../../middlewares/schemas/categories')

// routes
router.route('/').get(categoryController.find)

router
  .route('/')
  .post(verifyRequest(createCategorySchema), categoryController.create)

router
  .route('/:id')
  .put(
    verifyRequest({ id: categoryIdSchema }, 'params'),
    verifyRequest(updateCategorySchema),
    categoryController.update
  )

module.exports = router
