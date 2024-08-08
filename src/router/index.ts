import { createRouter, createWebHistory } from 'vue-router'
import VacanciesModule from '@/components/VacanciesModule/VacanciesModule.vue'
import PlugPage from '@/components/PlugPage/PlugPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VacanciesModule
    },
    {
      path: '/vacancy/:id',
      name: 'vacancy',
      component: PlugPage
    }
  ]
})

export default router
