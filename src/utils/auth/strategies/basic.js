const passport = require('passport');
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const bcryptjs = require('bcryptjs')

const UserService = require('../../../services/UserService')

passport.use(new BasicStrategy(async (email, password, cb) => {
  
  const userService = new UserService()
  try{
    const user = await userService.getUser({email}).lean()

    if(!user){
      return cb(boom.unauthorized(),false)
    }

    if(!(await bcryptjs.compare(password, user.password))){
      return cb(boom.unauthorized(),false)
    }

    delete user.password

    return cb(null, user)

  }catch(error){
    return cb(error)
  }
}))