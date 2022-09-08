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
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
