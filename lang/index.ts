import { createI18n } from 'vue-i18n'
import enUS from '../src/locales/en-US.json'
import zh from '../src/locales/zh.json'

type MessageSchema = typeof enUS

export const i18n = createI18n<[MessageSchema], 'en-US' | 'zh'>({
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    zh: zh,
  },
})
