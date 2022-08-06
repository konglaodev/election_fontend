import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Population from '@/views/Populations.vue'
import Candidate from '@/views/Candidate.vue'
import Homepage from '@/views/Homepage.vue'
import Dashboard from '@/views/Dashboard.vue'
import Verify from '@/views/Verify.vue'
import Profile from '@/views/UserProfile.vue'
import Profile_edit from '../components/profile/Profile_edit.vue'
Vue.use(VueRouter)

const routes = [
 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/Candidate',
    name: 'candidate',
    component: Candidate
  },
  {
    path: '/population',
    name: 'population',
    component: Population
  },
  {
    path: '/adminDashboard',
    name: 'adminDashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'homepage',
    component:Homepage
  },
  {
    path: '/verify',
    name: 'verify',
    component: Verify
  },
  {
    path: '/profiles',
    name: 'profile',
    component: Profile
  },
  {
    path: '/profilesedit/:id',
    name: 'profile_edit',
    component: Profile_edit
  },
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '*',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
