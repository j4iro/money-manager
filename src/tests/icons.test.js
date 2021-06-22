const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const { config } = require('../config/config')

const api = supertest(app)

describe('Auth', () => {
  test('sign in', async () => {
    //credentials
    const user = 'maria@undefined.sh'
    const password = config.defaultUserPassword

    await api
      .post('/v1/auth/sign-in')
      .auth(user, password)
      .send({
        apiKeyToken: config.adminApiKeyToken,
      })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body.user.email).toEqual(user)
        expect(response.body).toHaveProperty('token')
        // done()
      })
    // .catch((err) => done(err))
  })
})

afterAll(async () => {
  console.log('closing mongoose conection')
  await mongoose.connection.close()
})
