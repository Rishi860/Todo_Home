<template>
  <v-card class="mx-auto" max-width="900">
    <v-col>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>{{body.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <li class="mt-8" v-for="item in body.todosCompleted" :key="item">
        {{ item }} 
      </li>
      <!-- <v-btn @click="navigateTo({name:'usertodo',params:{userName: name}})" rounded color="indigo" dark>Back</v-btn> -->
    </v-col>
  </v-card>
</template>

<script>
import TodoServices from '@/services/TodoServices'

export default {
  data () {
    return {
      body:{
        name:'',
        todos:[],
        todosCompleted: []
      }
    }
  },
  methods:{
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted (){
    const getUser = (await TodoServices.get(this.$route.params.userName)).data
    this.body = getUser;
  }
}
</script>
