import { createApp } from 'vue'
import { i18n } from '@/lang/index'
import App from './App.vue'
import { setupRoutes } from './router'
import './index.css'

const app = createApp(App)
setupRoutes(app)
app.use(i18n)
app.mount('#app')
