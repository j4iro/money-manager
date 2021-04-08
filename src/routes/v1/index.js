const express = require('express')
const app = express()

app.use('/money', require('./money'))
app.use('/stats', require('./stats'))
app.use('/icons', require('./icons'))
app.use('/categories', require('./categories'))
app.use('/users', require('./users'))

module.exports = app
