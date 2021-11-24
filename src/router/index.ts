import type { App } from 'vue'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HelloWorld from '@pages/home/index.vue'
import JobListing from '@pages/job_listing/index.vue'
import PostDetail from '@pages/postDetail.vue'

import { createRouterLayout } from 'vue-router-layout'

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import('../../layouts/' + layout + '.vue')
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: RouterLayout,
    children: [
      {
        path: '',
        component: () => import('@pages/home/index.vue')
      }
    ]
  },
  {
    path: '/jobDetail/:id',
    name: 'JobDetail',
    component: RouterLayout,
    children: [
      {
        path: '',
        component: import('@pages/job_detail/index.vue')
      }
    ]
  },
  {
    path: '/job',
    name: 'JobListing',
    component: RouterLayout,
    children: [
      {
        path: '',
        component: import('@pages/job_listing/index.vue')
      }
    ]
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
