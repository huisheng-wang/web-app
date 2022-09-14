import Vue from 'vue'
import VueRouter from 'vue-router'
import me from '../views/me.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'me',
    component: me,
    children: [
      {
        path: 'home',
        component: ()=>import("../views/Home.vue")
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName:“lodash” */'../views/About.vue')
  },
  {
    path: '/homes',
    name: 'home',
    component: ()=>import("../views/Home.vue")
  },
  {
    path: '/code',
    name: 'code',
    component: ()=>import("../views/code.vue")
  },
 {
  path: '/balance',
  name: 'balance',
  component: () => import ("../views/balance")
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
