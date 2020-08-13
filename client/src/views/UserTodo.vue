<template>
  <v-card class="mx-auto" max-width="900">
    <v-col>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title @click="navigateTo({name:'home'})" class="pointer">Todo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo({name:'completed'})" color="indigo" depressed dark>Completed</v-btn>
      </v-toolbar>
      <v-text-field
        label="Name"
        v-model="body.name"
      ></v-text-field>
      <li class="mt-8" v-for="item in body.todos" :key="item">
        {{ item }} 
        <div class="float-right">
          <v-btn class="ma-2" color="primary" dark @click="add(item)">Done
            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
          <v-btn class="ma-2" @click="deleteTodo(item)" color="red" dark>Delete
            <v-icon dark right>mdi-cancel</v-icon>
          </v-btn>
        </div>  
      </li>
      <div v-if="body.name !=''">
        <v-text-field
          label="New Todo"
          v-model="newTodo"
          :append-outer-icon="newTodo ? 'mdi-plus' : ''"
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
      body:{
        name:'',
        todos:[],
        todosCompleted: []
      },
      newTodo:''
    }
  },
  async mounted (){
    const getUser = (await TodoServices.get(this.$route.params.userName)).data
    this.body = getUser;
  },
  methods:{
    async deleteTodo (item){
      this.body.todos.splice(this.body.todos.indexOf(item),1)
      await TodoServices.delete(this.body)
    },
    async addTodo (newTodo){
      this.body.todos.push(newTodo)
      await TodoServices.newTodo(this.body)
      this.newTodo = ''
    },
    navigateTo(route) {
      this.$router.push(route)
    },
    async add(item){
      this.body.todosCompleted.push(item)
      this.body.todos.splice(this.body.todos.indexOf(item),1)
      await TodoServices.complete(this.body)
    }
  }
}
</script>

<style  scoped>
  .pointer{
    cursor: pointer
  }
</style>