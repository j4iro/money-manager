const CategoryService = require('../services/CategoryService')

const categoryService = new CategoryService()

async function find(req, res, next) {
  try {
    // const id = req.params.id

    const result = await categoryService.getCategories()
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
}
