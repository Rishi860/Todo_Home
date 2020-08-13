import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewUser from '../views/NewUser.vue'
import UserTodo from '../views/UserTodo.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/new-user',
    name: 'newuser',
    component: NewUser
  },
  {
    path: '/:userName',
    name: 'usertodo',
    component: UserTodo
  },
  {
    path: '/:userName/completed',
    name: 'completed',
    component: Completed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
