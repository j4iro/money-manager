const Icon = require('../models/Icon')

class IconService {
  getIcons() {
    return Icon.find({ active: true }, { prefix: 1, icon: 1 })
  }

  create(document) {
    return Icon.create(document)
  }
}

module.exports = IconService
