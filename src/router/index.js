import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chart',
    component: () => import('../views/Chart')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chart')
  }
]

const router = new VueRouter({
  routes
})

export default router
