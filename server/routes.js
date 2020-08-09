const todoController = require('./controllers/index')

module.exports = (app) => {
    app.post('/',
    todoController.add)
    app.get('/',
    todoController.get)
    app.put('/',
    todoController.delete)
}