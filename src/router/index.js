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
    path: '/about/:name',
    name: 'About',
    component: () => import(/* webpackChunkName:"about" */'../views/About.vue')
  },
  {
    path: '/homes/:name',
    name: 'home',
    component: ()=>import("../views/Home.vue")
  },
  {
    path: '/code/:name',
    name: 'code',
    component: ()=>import("../views/code.vue")
  },
 {
  path: '/balance/:name',
  name: 'balance',
  component: () => import ("../views/balance")
 },
 {
  path:'/Recharge/:name',
  name: 'Recharge',
  component: ()=> import ("../views/Recharge")
 },
 {
  path: '/attestation/:name',
  name: 'attestation',
  component:()=> import ("../views/attestation")
 }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
