import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinmaRouter from './cinma'

Vue.use(VueRouter)

const routes = [
  movieRouter,
  mineRouter,
  cinmaRouter,
  {
    path:'/',
    redirect:'/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
