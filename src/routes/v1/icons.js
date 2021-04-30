const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')
const scopesValidationHandler = require('../../middlewares/scopesValidationHandler')

//controllers
const iconController = require('../../controllers/iconController')

//schemas
const {
  iconIdSchema,
  createIconSchema,
  updateIconSchema,
} = require('../../middlewares/schemas/icons')

//routes
// Get icons
router
  .route('/')
  .get(scopesValidationHandler(['read:icon']), iconController.find)

// Create a new icon
router
  .route('/')
  .post(
    scopesValidationHandler(['create:icon']),
    verifyRequest(createIconSchema),
    iconController.create
  )

// Update a icon by id
router
  .route('/:id')
  .put(
    scopesValidationHandler(['update:icon']),
    verifyRequest({ id: iconIdSchema }, 'params'),
    verifyRequest(updateIconSchema),
    iconController.update
  )

module.exports = router
