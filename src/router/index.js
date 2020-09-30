import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '../auth/authGuard'
import LoginSignUp from '../views/LoginSignUp.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginSignUp',
    component: LoginSignUp
  },
  {
    path: '/notes',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
