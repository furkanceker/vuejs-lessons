import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/AddView.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
