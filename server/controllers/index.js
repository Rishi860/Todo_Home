const User = require('../models/index')

module.exports = {
  async add (req, res) {
    try {
      console.log('here')
      const newUser = await User.create(req.body)
      console.log(req.body)
      res.send(newUser)
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error:'Something went wrong while creating a new user'
      })  
    }
  }
}