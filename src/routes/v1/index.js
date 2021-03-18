const express = require('express')
const app = express()

app.use('/expenses', require('./expenses'))
app.use('/icons', require('./icons'))
app.use('/categories', require('./categories'))

module.exports = app
