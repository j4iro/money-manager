const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')
const scopesValidationHandler = require('../../middlewares/scopesValidationHandler')

// controllers
const categoryController = require('../../controllers/categoryController')

// schemas
const {
  // categoryIdSchema,
  createCategorySchema,
} = require('../../middlewares/schemas/categories')

// routes
router
  .route('/')
  .get(scopesValidationHandler(['read:category']), categoryController.find)

router
  .route('/')
  .post(
    scopesValidationHandler(['create:category']),
    verifyRequest(createCategorySchema),
    categoryController.create
  )

module.exports = router
