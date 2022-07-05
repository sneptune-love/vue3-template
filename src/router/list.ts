
import { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      header: 1
    }
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      header: 1
    },
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      header: 1
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

export default routes
