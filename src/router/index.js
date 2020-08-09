import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import D3 from '../views/d3.vue'
import D32 from '../views/d3.2.vue'
import Alert from '../views/alert.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/d3',
    name: 'D3',
    component: D3,
  },
  {
    path: '/d32',
    name: 'D32',
    component: D32,
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
