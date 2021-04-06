// import
const IconService = require('../services/IconService')

// instances
const iconService = new IconService()

async function find(req, res, next) {
  try {
    const result = await iconService.getIcons().lean()
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
    const document = req.body

    const result = await iconService.create(document)
    res.status(201).json({
      success: true,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id
    const document = req.body

    const result = await iconService.update(id, document).lean()
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
  update,
}
