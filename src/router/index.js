import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/NotFound.vue') 
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchGames.vue')
  },
  {
    path: '/game/:gameId',
    component: () => import('../views/GamePage.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../components/HelloI18n.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
