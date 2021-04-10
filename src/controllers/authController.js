const passport = require('passport')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')

const { config } = require('../config/config')

const ApikeyService = require('../services/ApikeyService')
const apikeyService = new ApikeyService()

//Basic strategy
require('../utils/auth/strategies/basic')

function signIn(req, res, next) {
  const { apiKeyToken } = req.body

  if (!apiKeyToken) {
    next(boom.unauthorized('apiKeyToken is required'))
  }

  passport.authenticate('basic', function (err, user) {
    try {
      if (err || !user) {
        next(boom.unauthorized())
      }

      req.login(user, { session: false }, async function (err) {
        if (err) {
          next(err)
        }

        const apiKey = await apikeyService.getApiKey({ token: apiKeyToken })
        if (!apiKey) {
          next(boom.unauthorized())
        }

        const { _id: id, name, email } = user
        const payload = {
          sub: id,
          name,
          email,
          scopes: apiKey.scopes,
        }

        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m',
        })

        res.status(200).json({
          token,
          user: { id, name, email },
        })
      })
    } catch (err) {
      next(err)
    }
  })(req, res, next)
}

module.exports = {
  signIn,
}
