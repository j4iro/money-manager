const express = require('express')
const router = express.Router()

//controllers
const iconController = require('../../controllers/iconController')
const verifyRequest = require('../../middlewares/verifyRequest')

//schemas
const {
  iconIdSchema,
  createIconSchema,
  updateIconSchema,
} = require('../../middlewares/schemas/icons')

// Get icons
router.route('/').get(iconController.find)

// Create a new icon 
router.route('/').post(verifyRequest(createIconSchema), iconController.create)

//Update a icon by id
router
  .route('/:id')
  .put(
    verifyRequest({ id: iconIdSchema }, "params"),
    verifyRequest(updateIconSchema),
    iconController.update
  )

module.exports = router
