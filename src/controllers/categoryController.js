const CategoryService = require('../services/CategoryService')

const categoryService = new CategoryService()

async function find(req, res, next) {
  try {
    // const id = req.params.id

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
    res.status(200).json({
      success: true,
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
