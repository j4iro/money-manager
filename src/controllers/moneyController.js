const MoneyService = require('../services/MoneyService')

const moneyService = new MoneyService()

async function find(req, res, next) {
  try {
    const result = await moneyService.find()
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
    const result = await moneyService.create(document)
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
    const result = await moneyService.update(id, document).lean()
    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const id = req.params.id
    await moneyService.delete(id).lean()
    res.status(200).json({
      success: true,
      msg: 'Item deleted successfully',
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  find,
  create,
  update,
  remove,
}
