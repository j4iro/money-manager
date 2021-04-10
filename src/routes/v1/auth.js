const express = require('express')
const router = express.Router()

//controllers
const authController = require('../../controllers/authController')

//routes
router.route('/sign-in').post(authController.signIn)

module.exports = router
