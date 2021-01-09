import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Crew from '@/views/CrewList'
import CrewRead from '@/views/CrewRead'
import Rockets from '@/components/features/Rockets'
import RocketRead from '@/components/features/RocketRead'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
