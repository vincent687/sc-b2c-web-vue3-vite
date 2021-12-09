import { createApp } from 'vue'
import { i18n } from '@/lang/index'
import App from './App.vue'
import { createClient } from 'villus'
import { setupRoutes } from './router'
import './index.css'

const client = createClient({
  url: 'https://api.sit.salut.socialcareer.org/graphql', // your endpoint.
})

// Makes the villus client available to your app

const app = createApp(App)
setupRoutes(app)

app.use(i18n)
app.mount('#app')

app.use(client)
