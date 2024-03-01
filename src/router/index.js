import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/FormLogin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/FormSignUp.vue')
    },

    {
      path: '/auth-otp',
      name: 'otp',
      component: () => import('../components/OTP.vue')
    }
  ]
})

export default router
