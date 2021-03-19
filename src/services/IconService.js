const Icon = require('../models/Icon')
const { ObjectId } = require('mongodb')

class IconService {
  getIcons() {
    return Icon.find({ active: true }, { prefix: 1, icon: 1 })
  }

  create(document) {
    return Icon.create(document)
  }

  update(id, document) {
    return Icon.findOneAndUpdate({ _id: ObjectId(id) }, document, {
      new: true,
      runValidators: true,
      fields: {
        prefix: 1,
        icon: 1,
        created_at: 1,
        updated_at: 1,
      },
    })
  }
}

module.exports = IconService
