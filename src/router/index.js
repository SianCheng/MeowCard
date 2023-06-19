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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Role',
      name: 'Role',
      component: () => import('../views/RoleView.vue')
    },
    {
      path: '/Store',
      name: 'Store',
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/Discord',
      name: 'Discord',
      component: () => import('../views/DiscordView.vue')
    },
    {
      path: '/Pokemon',
      name: 'Pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/WS',
      name: 'WS',
      component: () => import('../views/WSView.vue')
    },
    {
      path: '/Yugioh',
      name: 'Yugioh',
      component: () => import('../views/YugiohView.vue')
    },
    {
      path: '/Other',
      name: 'Other',
      component: () => import('../views/OtherView.vue')
    },
    {
      path: '/:domain(.*)*',
      name: 'NotFound',
      component: import('../views/404.vue')
    },
  ]
});

export default router
