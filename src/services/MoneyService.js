const Money = require('../models/Money')
const { ObjectId } = require('mongodb')

class MoneyService {
  // constructor()

  find() {
    return Money.find({ active: true })
  }

  findByMonthAndYear({ month, year }) {
    return Money.aggregate([
      {
        $project: {
          category: 1,
          date: 1,
          day: { $dayOfMonth: '$date' },
          month: { $month: '$date' },
          year: { $year: '$date' },
          amount: 1,
          created_at: 1,
          updated_at: 1,
          active:1
        },
      },
      { $match: { active: true, month, year } },
    ])
  }

  create(document) {
    return Money.create(document)
  }

  update(id, document) {
    return Money.findOneAndUpdate(
      { _id: ObjectId(id), active: true },
      document,
      {
        new: true,
        runValidators: true,
        fields: {
          category: 1,
          icon: 1,
          amount: 1,
          date: 1,
          created_at: 1,
          updated_at: 1,
        },
      }
    )
  }

  delete(id) {
    return Money.findOneAndUpdate({ _id: ObjectId(id) }, { active: false })
  }
}

module.exports = MoneyService
