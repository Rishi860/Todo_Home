const todoController = require('./controllers/index')

module.exports = (app) => {
    app.post('/',
    todoController.add)
    app.get('/',
    todoController.get)
    app.put('/',
    todoController.delete)

    app.post('/new-user',
    todoController.create)
    app.post('/:userName',
    todoController.complete)
}