import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { setupRoutes } from './router'
import './index.css'
import enUS from './locales/en-US.json'
import zh from './locales/zh.json'

type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US' | 'zh'>({
  locale: 'zh',
  messages: {
    'en-US': enUS,
    zh: zh
  }
})

const app = createApp(App)
setupRoutes(app)

app.use(i18n)
app.mount('#app')
