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
        return Api().post('/', todo)
    }
}