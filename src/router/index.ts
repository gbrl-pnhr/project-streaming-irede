import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.views.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/views/details.views.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/movies.views.vue')
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('@/views/series.views.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('@/views/favorite.views.vue')
    },
  ]
})

export default router
