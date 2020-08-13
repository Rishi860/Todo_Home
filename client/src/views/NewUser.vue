<template>
  <v-card class="mx-auto" max-width="900">
    <v-col>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title @click="navigateTo({name:'home'})" class="pointer">Todo</v-toolbar-title>
      </v-toolbar>
      <v-text-field
        label="Name"
        v-model="body.name"
        :rules = "[required]"
      ></v-text-field>
      <li class="mt-2" v-for="item in body.todos" :key="item">
        {{ item }} 
        <v-btn @click="deleteTodo(item)" rounded color="indigo" dark>X</v-btn>
      </li>
      <div>
        <v-text-field
          label="New Todo"
          v-model="newTodo"
          :append-outer-icon="newTodo ? 'mdi-plus' : 'mdi-plus'"
          @click:append-outer="addTodo(newTodo)"
        ></v-text-field>
      <v-btn @click="create" rounded color="indigo" dark>Create</v-btn>
      <div class="alert mt-2">{{response}}</div>
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
        todos:[]
      },
      newTodo:'',
      required: (value) => !!value || 'Required',
      response: null
    }
  },
  methods:{
    async deleteTodo (item){
      this.body.todos.splice(this.body.todos.indexOf(item),1)
    },
    async addTodo (newTodo){
      this.body.todos.push(newTodo)
      this.newTodo = ''
    },
    async create (){
      if (this.body.name == null) {
        this.error = 'Name is required!!'
        return;
      } else {
        const response = (await TodoServices.create(this.body)).data;
        this.response = response;
      }
    },
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style  scoped>
  .alert{
    background-color: blue;
    border-color: blue;
    margin-top: 2px;
    text-align: center;
    color: white;
  }
  .pointer{
    cursor: pointer
  }
</style>