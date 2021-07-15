// DEBUG=app:* node ./src/scripts/mongo/seedIcons.js

const chalk = require('chalk')
const debug = require('debug')('app:scripts:icons')
const dbDatabase = require('../../config/mongodb')

const Icon = require('../../models/Icon')
const { iconsMock } = require('../../utils/mocks/icons')

async function seedIcons() {
  try {
    //connect to mongodb
    await dbDatabase.connect()
    debug(chalk.green('Database connected'))

    //delete all icons
    await Icon.collection.drop()
    debug(chalk.green('Icon Collection dropped'))

    //insert icons
    await Icon.insertMany(iconsMock)
    debug(chalk.green('Icon Inserted'))
    return process.exit(0)
  } catch (err) {
    debug(chalk.red(err))
    process.exit(1)
  }
}

seedIcons()
