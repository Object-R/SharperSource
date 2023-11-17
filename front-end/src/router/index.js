import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/IndexPage.vue'
import Upload from '../views/Upload.vue'
import Download from '../views/Download.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/global-front/upload',
      name: 'upload',
      component: Upload,
    },
    {
      path: '/global-front/download',
      name: 'download',
      component: Download,
    },
    {
      path: '/global-front/index-page',
      name: 'index',
      component: Index
    },
  ]
})

export default router
