const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('icons are returnet as json', async () => {
  await api.get('/v1/icons').expect(200).expect('Content-Type', /json/)
})

afterAll(() => {
  mongoose.connection.close()
})
