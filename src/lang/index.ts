import { createI18n } from 'vue-i18n'
import enUS from '../locales/en-US.json'
import zh from '../locales/zh.json'

export enum Locale {
  en = 'en-US',
  zh = 'zh',
}

export type AvailableLocales = Locale.en | Locale.zh

type MessageSchema = typeof enUS

export const i18n = createI18n<[MessageSchema], AvailableLocales>({
  locale: 'en-US',
  messages: {
    [Locale.en]: enUS,
    [Locale.zh]: zh,
  },
})
