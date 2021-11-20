import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import HelloWorld from '../pages/Home/Index.vue'
import PostDetail from '../pages/postDetail.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/postDetail/:id',
    name: 'postDetai',
    component: PostDetail
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
