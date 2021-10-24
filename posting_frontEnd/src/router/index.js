import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import CreatePosts from '../views/CreatePosts' 
import DeletePosts from '../views/DeletePosts'
import Register from '@/views/connexion/Register'
import Login from '@/views/connexion/Login'
import Profile from '@/views/Profile'
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Posts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/createPosts',
    name: 'CreatePoste',
    component: CreatePosts
  },
  {
    path: '/DeletePosts',
    name: 'DeletePoste',
    component: DeletePosts
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
