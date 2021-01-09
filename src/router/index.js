import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Crew from '@/views/CrewList'
import CrewRead from '@/views/CrewRead'
import Rockets from '@/views/RocketsList'
import RocketRead from '@/views/RocketRead'
import Capsules from '@/views/Capsules'

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
  },
  {
    path: '/crew/:id',
    name: 'CrewRead',
    component: CrewRead,
    props: true
  },
  {
    path: '/rockets',
    name: 'Rockets',
    component: Rockets
  },
  {
    path: '/rockets/:id',
    name: 'RocketRead',
    component: RocketRead,
    props: true
  },
  {
    path: '/capsules',
    name: 'Capsules',
    component: Capsules
  }
]

const router = new VueRouter({
  routes
})

export default router
