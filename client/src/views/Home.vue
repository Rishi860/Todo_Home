<template>
  <v-card class="mx-auto" max-width="900">
    <v-col>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Todo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo({name:'newuser'})" color="indigo" depressed dark>Create</v-btn>
      </v-toolbar>
      <v-text-field
        label="Name"
        v-model="name"
      ></v-text-field>
      <v-btn @click="navigateTo({name:'usertodo',params:{userName: name}})" rounded color="indigo" dark>Search</v-btn>
    </v-col>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      name:'',
      newTodo:''
    }
  },
  methods:{
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>
