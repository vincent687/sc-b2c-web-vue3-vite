import type { App } from 'vue'
import { i18n, Locale } from '@/lang/index'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import('../layouts/' + layout + '.vue')
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: `/${Locale.en}/jobs`,
  },
  {
    path: '/:locale',
    component: RouterLayout,
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale.toString()
      const supportedLocales = import.meta.env.VITE_I18N_LOCALES.split(',')
      if (!supportedLocales.includes(locale)) {
        return next(Locale.en)
      }

      if (i18n.global.locale !== locale) {
        i18n.global.locale = locale
      }

      return next()
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/job_listing/index.vue'),
      },
      {
        path: 'jobs',
        name: 'JobListing',
        component: () => import('@/pages/job_listing/index.vue'),
      },
      {
        path: 'jobs/:id',
        name: 'JobDetails',
        component: () => import('@/pages/job_details/index.vue'),
      },
      // will match everything and put it under `$route.params.pathMatch`
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/not_found/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function setupRoutes(app: App<Element>): void {
  app.use(router)
}

export default router
