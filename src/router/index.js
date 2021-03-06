import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../views/Home'
import Exercises from '../views/exercises'
import Login from '../views/login'
import Register from '../views/register'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {hideInMenu: false}
  },
 {
    path: '/exercises',
    name: 'Ejercicios',
    component: Exercises,
    meta: {hideInMenu: false}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {hideInMenu: false}
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {hideInMenu: false}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next ) => {
  const isAuth = localStorage.getItem("jwt-token")

  if(to.meta.private === true){
    if(isAuth){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})

export default router