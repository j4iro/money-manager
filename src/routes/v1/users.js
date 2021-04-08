const express = require('express')
const router = express.Router()
const verifyRequest = require('../../middlewares/verifyRequest')

//controllers
const userController = require('../../controllers/userController')

//schemas
const {
  userIdSchema, createUserSchema
} = require('../../middlewares/schemas/users')

//routes
// Get user

// Create a new user
router.route('/').post(verifyRequest(createUserSchema), userController.create)

// Update a user by id

module.exports = router
