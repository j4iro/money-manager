const Key = require('../models/Key')

class ApikeyService {
  async getApiKey({ token }) {
    const [apikey] = await Key.find({ token }).lean()
    return apikey
  }
}

module.exports = ApikeyService
