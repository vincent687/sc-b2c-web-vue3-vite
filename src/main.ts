import { createApp } from 'vue'
import { i18n } from '@/lang/index'
import App from './App.vue'
import { setupRoutes } from './router'
import './index.css'
import client from './graphql/client'

// Makes the villus client available to your app
const app = createApp(App)
setupRoutes(app)
app.use(i18n)
app.mount('#app')
app.use(client)
