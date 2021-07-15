const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const { config } = require('../config/config')

const Icon = require('../models/Icon')
const { iconsMock } = require('../utils/mocks/icons')

const api = supertest(app)

describe('Icons', () => {
  // 401 unauthorized
  test('Icons 401', async () => {
    await api.get('/v1/icons/').expect(401)
  })

  // 200 success
  test('Icons list', async () => {
    await api
      .get('/v1/icons/')
      .set('Authorization', `Bearer ${config.tokenBearerTest}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(function (response) {
        // console.log(response.body)
        expect(response.body.data).toHaveLength(iconsMock.length)
        const contents = response.body.data.map((r) => r.icon)
        expect(contents).toContain('fa-pizza-slice')
      })
  })
})

beforeEach(async () => {
  //delete icons
  await Icon.deleteMany({})

  //insert mocks
  iconsMock.forEach(async (element) => {
    // console.log(element)
    const iconObject = new Icon(element)
    await iconObject.save()
  })
})

afterAll(async () => {
  console.log('closing mongoose conection')
  await mongoose.connection.close()
})
