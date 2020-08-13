const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userTodoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  todos:[{type: String}],
  todosCompleted: [{type: String}]
},{collection:'characters_todo'})

const User= mongoose.model('User', userTodoSchema)

module.exports = User;
