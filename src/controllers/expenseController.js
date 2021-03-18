const ExpenseService = require('../services/ExpenseService')

const expenseService = new ExpenseService()

async function find(req, res, next) {
  try {
    // const id = req.params.id

    const result = await expenseService.find()
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
