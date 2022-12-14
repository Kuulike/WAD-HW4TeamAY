import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '../views/AddPostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUsView
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPostView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
