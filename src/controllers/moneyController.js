// import
const _ = require('lodash')
const MoneyService = require('../services/MoneyService')

// instances
const moneyService = new MoneyService()

async function create(req, res, next) {
  try {
    const { date, amount, category } = req.body
    const { name, type, icon } = category

    const document = {
      date,
      amount,
      category: {
        name,
        type,
        icon: {
          icon: icon.icon,
          prefix: icon.prefix,
        },
      },
      user: {
        _id: req.user._id,
        email: req.user.email,
      },
    }

    const resultDb = await moneyService.create(document)
    const result = _.pick(resultDb, ['_id', 'date', 'amount', 'category'])

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
    const idDocument = req.params.id
    const { date, amount, category } = req.body
    const { name, type, icon } = category

    const document = {
      date,
      amount,
      category: {
        name,
        type,
        icon: {
          icon: icon.icon,
          prefix: icon.prefix,
        },
      },
      user: {
        _id: req.user._id,
        email: req.user.email,
      },
    }

    const resultDb = await moneyService.update(idDocument, document).lean()
    res.status(200).json({
      success: true,
      data: resultDb,
    })
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const idDocument = req.params.id
    await moneyService.delete(idDocument).lean()
    res.status(200).json({
      success: true,
      msg: 'Item deleted successfully',
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  // find,
  create,
  update,
  remove,
}
