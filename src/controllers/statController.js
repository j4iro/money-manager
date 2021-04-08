// import
const MoneyService = require('../services/MoneyService')

// instances
const moneyService = new MoneyService()

async function find(req, res, next) {
  try {
    const month = parseInt(req.query.month)
    const year = parseInt(req.query.year)
    // const {userId} = req.query
    const userId = '89awhd8'

    const result = await moneyService.findByMonthAndYear({
      month,
      year,
      userId,
    })

    let totalIncome = 0,
      totalExpenses = 0,
      balance = 0

    let documentsGroupByDay = []

    //Process data
    result.forEach((element) => {
      const type = element.category.type
      const amount = element.amount

      //Calc global info
      totalExpenses += type === 'expense' ? amount : 0
      totalIncome += type === 'income' ? amount : 0

      //Search index of day
      const indexDayFound = documentsGroupByDay.findIndex(
        (e) => e.day === element.day
      )

      if (indexDayFound === -1) {
        documentsGroupByDay.push({
          day: element.day,
          info: {
            total_expenses: type === 'expense' ? amount : 0,
            total_incomes: type === 'income' ? amount : 0,
          },
          details: [element],
        })
      } else {
        documentsGroupByDay[indexDayFound].info.total_expenses +=
          type === 'expense' ? amount : 0
        documentsGroupByDay[indexDayFound].info.total_incomes +=
          type === 'income' ? amount : 0
        documentsGroupByDay[indexDayFound].details.push(element)
      }
    })

    balance = totalExpenses - totalIncome

    const resultFinal = {
      month: month,
      year: year,
      total_income: totalIncome,
      total_expenses: totalExpenses,
      balance: balance,
      results: documentsGroupByDay,
    }

    res.status(200).json({
      success: true,
      data: resultFinal,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  find,
}
