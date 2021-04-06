// import
const CategoryService = require('../services/CategoryService')

// instances
const categoryService = new CategoryService()

async function find(req, res, next) {
  try {
    const result = await categoryService.getCategories().lean()

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
    const documentCategory = req.body

    const result = await categoryService.create(documentCategory)
    res.status(201).json({
      success: true,
      msg: 'Category created',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id
    const documentCategory = req.body

    const result = await categoryService.update(id, documentCategory).lean()
    res.status(200).json({
      success: true,
      msg: 'Category Updated',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  find,
  create,
  update,
}
