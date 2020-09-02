<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
    cols="12"
    sm="8"
    md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
        color="primary"
        dark
        flat
        >
        <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
        <v-form>
            <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
            ></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
 </v-row>
</template>

<script>
import TodoServices from '@/services/TodoServices'

export default {
    methods: {
        async login (){
            await TodoServices.login()
        }
    }
}
</script>

<style>

</style>