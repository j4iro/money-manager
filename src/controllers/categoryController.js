// import
const _ = require('lodash')
const CategoryService = require('../services/CategoryService')

// instances
const categoryService = new CategoryService()

async function find(req, res, next) {
  try {
    const userId = req.user._id
    const result = await categoryService.getCategories({ userId }).lean()

    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

async function create(req, res, next) {
  try {
    const { name, type, icon } = req.body
    const documentCategory = {
      name,
      type,
      icon: {
        prefix: icon.prefix,
        icon: icon.icon,
      },
      user: {
        _id: req.user._id,
        email: req.user.email,
      },
      custom: true,
    }

    //create in database
    const resultDb = await categoryService.create(documentCategory)
    const result = _.pick(resultDb, [
      '_id',
      'name',
      'type',
      'icon',
      'created_at',
    ])

    res.status(201).json({
      success: true,
      msg: 'Category created',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  find,
  create,
}
