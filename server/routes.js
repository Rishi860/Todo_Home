const todoController = require('./controllers/index')

module.exports = (app) => {
    app.post('/',
    todoController.add)
    app.get('/api',(req, res)=>{
        try {
            res.send('it reached here')
        } catch (error) {
            console.log(error)
            res.status(400).send({
                error:'something fishy is going in here'
            })
        }
    })
}