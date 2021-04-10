// DEBUG=app:* node ./src/scripts/mongo/seedUsers.js

const bcryptjs = require('bcryptjs')
const chalk = require('chalk')
const debug = require('debug')('app:scripts:users')
const dbDatabase = require('../../config/mongodb')
const User = require('../../models/User')
const { config } = require('../../config/config')

const users = [
  {
    email: 'root@undefined.sh',
    name: 'ROOT',
    password: config.defaultAdminPassword,
    isAdmin: true,
  },
  {
    email: 'jose@undefined.sh',
    name: 'Jose Maria',
    password: config.defaultUserPassword,
  },
  {
    email: 'maria@undefined.sh',
    name: 'Maria Jose',
    password: config.defaultUserPassword,
  },
]

async function createUser(user) {
  const { name, email, password, isAdmin } = user
  const hashedPassword = await bcryptjs.hash(password, 10)

  const userId = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin: Boolean(isAdmin),
  })

  return userId
}

async function seedUsers() {
  try {

    //connect to mongodb
    await dbDatabase.connect()
    debug(chalk.green('Database connected'))

    const promises = users.map(async (user) => {
      const userCreated = await createUser(user)
      debug(chalk.green('User created with id:', userCreated._id))
    })

    await Promise.all(promises)
    return process.exit(0)
  } catch (error) {
    debug(chalk.red(error))
    process.exit(1)
  }
}

seedUsers()
