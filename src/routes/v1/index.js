const express = require('express')
const passport = require('passport')

const app = express()

//jwt
require('../../utils/auth/strategies/jwt')

//routes
app.use(
  '/money',
  passport.authenticate('jwt', { session: false }),
  require('./money')
)

app.use(
  '/stats',
  passport.authenticate('jwt', { session: false }),
  require('./stats')
)

app.use('/icons', require('./icons'))

app.use(
  '/categories',
  passport.authenticate('jwt', { session: false }),
  require('./categories')
)

app.use('/users', require('./users'))

app.use('/auth', require('./auth'))

module.exports = app
