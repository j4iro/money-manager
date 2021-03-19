const Category = require('../models/Category')
// const { ObjectId } = require('mongodb')

class CategoryService {
  getCategories() {
    return Category.find({ active: true }, { name: 1, icon: 1, created_at: 1 })
  }
  create(document) {
    return Category.create(document)
  }
}

module.exports = CategoryService
