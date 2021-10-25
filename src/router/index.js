import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work/:id',
    name: 'Work',
    component: Work
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
