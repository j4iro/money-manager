// const MoneyService = require('../services/MoneyService')

// const moneyService = new MoneyService()

async function find(req, res, next) {
  try {
    const month = req.query.month
    const year = req.query.year

    // const result = await moneyService.findByMonthAndYear(month, year).lean()

    //Process data
    const resultFinal = [
      {
        month: month,
        year: year,
        total_income: 85300,
        total_expenses: 1420,
        balance: 85300 - 1420,
        detail: [
          {
            day: '05',
            data: [
              {
                category: {
                  name: 'food',
                  type: 'expense',
                },
                icon: {
                  icon: 'food',
                },
                amount: 250,
              },
            ],
          },
        ],
      },
    ]

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
