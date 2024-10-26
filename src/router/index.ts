// index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/HomeView.vue' // Componente Home cargado de forma inmediata

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../Components/AboutView.vue'),  // Lazy load
      props: route => ({ id: parseInt(route.params.id as string) })
    }
  ]
})

export default router

