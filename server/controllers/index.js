const User = require('../models/index')

module.exports = {
  async add (req, res) {
    try {
      console.log('here add ')
      const find = await User.findOne({ name: req.body.name })
      if (find) {
        console.log('here if ')
        const userData = await User.findOneAndUpdate({
          name:req.body.name},
          req.body)
        res.send(userData)
      } else {
        const newUser = await User.create(req.body)
        res.send(newUser)
      }
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error:'Something went wrong while creating a new user'
      })  
    }
  },
  async get (req, res) {
    try {
      console.log('here get')
      const user = await User.findOne({
        name:req.query.search
      })
      console.log(req.query.search,user)
      res.send(user)
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error:'Something went wrong while reaching the list'
      })  
    }
  },
  async delete (req, res) {
    try {
      console.log('here delete',req.body)
      await User.findOneAndUpdate({
        name:req.body.name},
        req.body)
      res.send("Update completed")
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error:'Something went wrong while deleting todos'
      })
    }
  },
  async create (req, res) {
    try {
      console.log('here create')
      let user = await User.findOne({name: req.body.name})
      if(user)
      return res.send(" User alreday exist ");
      const newUser = await User.create(req.body)
      res.send(" New user created ")
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error:'Something went wrong while creating a new user'
      })
    }
  },
  async complete (req, res) {
    try {
      console.log('here complete')
      await User.findOneAndUpdate({
        name:req.body.name},
        req.body)
      res.send(" Todo Added ")
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error:'Something went wrong while adding it to the complete list'
      })
    }
  }
}