// import
const UserService = require('../services/UserService')

// instances
const userService = new UserService()

async function create(req, res, next){
  try {
    const { name, email, password, isAdmin } = req.body

    //Verify if exists by email
    const userFound = await userService.getUser({email}).lean()

    if(userFound){
      return res.status(200).json({success:false, msg:`The email '${email}' is already exists`})
    }

    const document = {
      name,
      email,
      password,
      isAdmin,
    }

    const result = await userService.create({user:document})
    res.status(201).json({
      success: true,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create
}