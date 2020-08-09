<template>
  <v-card class="mx-auto" max-width="900">
    <v-col>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Todo</v-toolbar-title>
      </v-toolbar>
      <v-text-field
        label="Name"
        v-model="name"
      ></v-text-field>
      <v-btn @click="get" rounded color="indigo" dark>Search</v-btn>
      <li class="mt-2" v-for="item in todos" :key="item">
        {{ item }} 
        <v-btn @click="deleteTodo(item)" rounded color="indigo" dark>X</v-btn>
      </li>
      <div v-if="name !=''">
        <v-text-field
          label="New Todo"
          v-model="newTodo"
          :append-outer-icon="newTodo ? 'mdi-plus' : 'mdi-plus'"
          @click:append-outer="addTodo(newTodo)"
        ></v-text-field>
      </div>
    </v-col>
  </v-card>
</template>

<script>
// @ is an alias to /src
import TodoServices from '@/services/TodoServices'

export default {
  data () {
    return {
      todos:[],
      name:'',
      newTodo:''
    }
  },
  methods:{
    async get (){
      const getUser = (await TodoServices.get(this.name)).data
      this.todos = getUser.todos;
    },
    async deleteTodo (item){
      this.todos.splice(this.todos.indexOf(item),1)
      let body = {name:this.name,todos:this.todos} 
      await TodoServices.delete(body)
    },
    async addTodo (newTodo){
      //  Todo: new user entry !!!!
      console.log(this.todos)
      this.todos.push(newTodo)
      let body = {name:this.name,todos:this.todos}
      await TodoServices.newTodo(body)
    }
  }
}
</script>
