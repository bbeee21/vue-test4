import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import SignUpCont from '../views/SignUpCont.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },

  {
    path: '/signup',
    name: 'Sign_up',
    component: SignUpCont,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
