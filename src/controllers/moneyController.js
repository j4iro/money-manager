// import
const MoneyService = require('../services/MoneyService')

// instances
const moneyService = new MoneyService()

async function create(req, res, next) {
  try {
    // const {userId} = req.query
    const userId = '89awhd8'
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
      userId,
    }

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
  // find,
  create,
  update,
  remove,
}
