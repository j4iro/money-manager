const express = require('express')
const router = express.Router()

// middlewares
const verifyRequest = require('../../middlewares/verifyRequest')
const { createUser } = require('../../middlewares/schemas/users')

//controllers
const authController = require('../../controllers/authController')

//routes
router.route('/sign-in').post(authController.signIn)
router.route('/sign-up').post(verifyRequest(createUser), authController.signUp)

module.exports = router
