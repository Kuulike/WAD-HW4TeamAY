import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '../views/AddPostView.vue'
import APostView from '../views/APostView.vue'
import auth from '../auth'

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
  {
    path: '/apost',
    name: 'apost',
    component: APostView
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async(to, from) => {
  let authResult = await auth.authenticated().then();
  if(!authResult && (to.name == 'home' || to.name == 'addpost' || to.name == 'apost')) {
    return '/login';
  }
})

export default router
