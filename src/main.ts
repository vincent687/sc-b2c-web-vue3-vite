import { createApp } from 'vue'
import App from './App.vue'
import { setupRoutes } from './router'
import './index.css'

const app = createApp(App)
setupRoutes(app)

app.mount('#app')
