import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/1' },
      name: 'home',
      children: [
        {
          path: '/:page',
          name: 'page',
          component: () => import('@/views/home.vue')
        }
      ],
      meta: {
        reload: true
      }
    },

    {
      path: '/details',
      name: 'details',
      component: () => import('@/views/details.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/movies.vue')
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('@/views/series.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('@/views/favorite.vue')
    },
  ]
})

export default router
