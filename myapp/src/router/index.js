import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

// 组件开始
import MyHeader from '../components/MyHeader'
import MyFooter from '../components/MyFooter'
// 组件结束

// 页面
import Index from '../views/Index'
import Order from '../views/Order'
import Live from '../views/Live'

Vue.use(VueRouter)

const routes = [
  {
    path: '/live',
    name:'Live',
    component: Live
  },
  {
    path: '/order',
    name:'Order',
    component: Order
  },
  {
    path: '/',
    name:'Index',
    component: Index
  },
  {
    path: '/header',
    name:'MyHeader',
    component: MyHeader
  },
  {
    path: '/footer',
    name:'MyFooter',
    component: MyFooter
  },
  {
    path: '/home',
    name:'Home',
    component: Home
  },
  {
    path: '/about',
    name:'About',
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
