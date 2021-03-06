import Vue from 'vue'
import Login from '../components/Login.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = new VueRouter({
  routes
})

export default router
