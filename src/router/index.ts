import type { App } from 'vue'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HelloWorld from '@pages/home/index.vue'
import JobListing from '@pages/job_listing/index.vue'
import PostDetail from '@pages/postDetail.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/postDetail/:id',
    name: 'postDetail',
    component: PostDetail
  },
  {
    path: '/job',
    name: 'JobListing',
    component: JobListing
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRoutes(app: App<Element>): void {
  app.use(router)
}

export default router
