const Category = require('../models/Category')
const { ObjectId } = require('mongodb')

class CategoryService {
  getCategories() {
    return Category.find(
      { active: true },
      {
        name: 1,
        icon: 1,
        type: 1,
        custom: 1,
        created_at: 1,
      }
    )
  }

  create(document) {
    return Category.create(document)
  }

  update(id, document) {
    return Category.findOneAndUpdate(
      { _id: ObjectId(id), active: true },
      document,
      {
        new: true,
        runValidators: true,
        fields: {
          name: 1,
          icon: 1,
          type: 1,
          amount: 1,
          updated_at: 1,
        },
      }
    )
  }
}

module.exports = CategoryService
