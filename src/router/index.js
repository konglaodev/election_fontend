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
import Dashboard_super from '@/views/bie/judge/dashboard.vue'
import User_Management from '@/components/bie/judge/management/user/user.vue'
import People from '@/components/bie/judge/people/people.vue'
import Election from '@/components/bie/judge/election_candidates/election_candidates.vue'
import ElectionInformation from '@/components/bie/judge/election_candidates/election_information.vue'
import DashboardVillageHeadman from '@/views/bie/village_headman/dashboard.vue'
import UnitInformation from '@/components/bie/village_headman/management/unit/unit.vue'
import CensusInformation from '@/components/bie/village_headman/management/census/census.vue'
import PeopleInformation from '@/components/bie/village_headman/management/people/people.vue'
import CandidateInformation from '@/components/bie/judge/management/candidate/candidate.vue'
import CheckPermissionElection from '@/components/bie/village_headman/management/check_permission_election/check_permission_election.vue'
import HeadmanElectionInformation from '@/components/bie/village_headman/headman_election_information/headman_election_information.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/dashboard_village_headman',
    name:'dashboard_village_headman',
    component: DashboardVillageHeadman
  },
  {
    path:'/unit_information',
    name:'unit_information',
    component: UnitInformation
  },
  {
    path:'/census_information',
    name:'census_information',
    component: CensusInformation
  },
  {
    path:'/people_infomation',
    name:'people_infomation',
    component: PeopleInformation
  },
  {
    path:'/candidate_information',
    name:'candidate_information',
    component: CandidateInformation
  },
  {
    path:'/check_permission_election',
    name:'check_permission_election',
    component: CheckPermissionElection
  },
  {
    path:'/headman_election_information',
    name:'headman_election_information',
    component: HeadmanElectionInformation
  },
  {
    path:'/election_information',
    name:'election_information',
    component: ElectionInformation
  },
  {
    path:'/election_candidates',
    name:'election_candidates',
    component: Election
  },
  {
    path:'/people',
    name:'people',
    component: People
  },
  {
    path:'/user_management',
    name:'user_management',
    component: User_Management
  },
  {
    path:'/dashboardsuper',
    name:'dashboardsuper',
    component: Dashboard_super
  },
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
    path: '/profilesedit/:id',
    name: 'profile_edit',
    component: Profile_edit
  },
  {
    path: '/firebase',
    name: 'firebase',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/firebase.vue')
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
    path: "/crud",
    name: "crud",
    component: () => import("../views/crudTable.vue")
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
