import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/SignUpView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: LoginView
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
