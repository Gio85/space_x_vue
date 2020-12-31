import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Crew from '../views/Crew'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crew',
    name: 'Crew',
    component: Crew
  }
]

const router = new VueRouter({
  routes
})

export default router
