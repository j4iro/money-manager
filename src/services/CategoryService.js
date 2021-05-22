const Category = require('../models/Category')
// const { ObjectId } = require('mongodb')

class CategoryService {
  getCategories({ userId }) {
    return Category.find(
      {
        $or: [
          { $and: [{ custom: false, active: true }] },
          { $and: [{ custom: true, active: true, 'user._id': userId }] },
        ],
      },
      {
        name: 1,
        icon: 1,
        type: 1,
        custom: 1,
        created_at: 1,
        // user: 1,
      }
    )
  }

  create(document) {
    return Category.create(document)
  }
}

module.exports = CategoryService
