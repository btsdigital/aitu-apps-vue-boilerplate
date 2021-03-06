import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Slider from '../views/slider.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
   component: Slider
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
