// DEBUG=app:* node ./src/scripts/mongo/seedApiKeys.js

const chalk = require('chalk')
const crypto = require('crypto')
const debug = require('debug')('app:scripts:api-keys')
const dbDatabase = require('../../config/mongodb')
const Key = require('../../models/Key')

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:money',
  'create:money',
  'update:money',
  'delete:money',
  'read:category',
  'create:category',
  'update:category',
  'delete:category',
  'read:icon',
  'create:icon',
  'update:icon',
  'delete:icon',
]

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:money',
  'create:money',
  'update:money',
  'delete:money',
  'read:category',
  'create:category',
  'read:icon',
]

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes,
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes,
  },
]

function generateRandomToken() {
  const buffer = crypto.randomBytes(32)
  return buffer.toString('hex')
}

async function seedApiKeys() {
  try {
    //connect to mongodb
    await dbDatabase.connect()
    debug(chalk.green('Database connected'))

    const promises = apiKeys.map(async (apiKey) => {
      await Key.create(apiKey)
    })

    await Promise.all(promises)
    debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
    return process.exit(0)
  } catch (error) {
    debug(chalk.red(error))
    process.exit(1)
  }
}

seedApiKeys()
