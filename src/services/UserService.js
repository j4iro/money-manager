const User = require('../models/User')
const bcryptjs = require('bcryptjs')

class UserService {

  getUser({email}){
    return User.findOne({ email })
  }

  async create({user}){
    const { name, email, password } = user
    const hashedPassword = await bcryptjs.hash(password, 10)

    return User.create({
      name,email,password: hashedPassword
    })

  }
}

module.exports = UserService