import Api from './Api'

export default {
    get (name) {
        return Api().get('/', {
            params: {
                search: name
            }
        })
    },
    delete (todo) {
        return Api().put('/', todo)
    },
    newTodo (body){
        return Api().post('/',body)
    },
    create (body){
        return Api().post('/new-user',body)
    },
    complete (body){
        return Api().post(`/${body.name}`,body)
    }
}