import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/home/1' },
      name: 'home',
      children: [
        {
          path: '/home/:page',
          name: 'page-home',
          component: () => import('@/views/home.vue')
        }
      ],
      meta: {
        reload: true
      }
    },
    {
      path: '/details/:media/:id',
      name: 'details',
      component: () => import('@/views/details.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      children: [
        {
          path: '/movies/:page',
          name: 'page-movies',
          component: () => import('@/views/movies.vue')

        }
      ]
    },
    {
      path: '/series',
      name: 'series',
      children: [
        {
          path: '/series/:page',
          name: 'page-series',
          component: () => import('@/views/series.vue')

        }
      ]
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('@/views/Favorites/favorite.vue')
    },
  ]
})

export default router
