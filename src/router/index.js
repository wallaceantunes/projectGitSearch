import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '@/views/Search.vue'
import Result from '@/views/Results.vue'
import Profile from '@/views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/painel-busca',
    name: 'Result',
    component: Result
  },
  {
    path: '/perfil/:name',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
