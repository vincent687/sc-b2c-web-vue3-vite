import { computed, inject, provide, readonly, Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Router } from 'vue-router'

const LocaleSymbol = Symbol()

export type Context = {
  state: Ref<string>
  load: (locale: string) => void
}

export const useLocaleProvide = () => {
  const i18n = useI18n()

  const state = ref<string>(i18n.locale.value)

  const loadLocale = (locale: string, router: Router) => {
    state.value = locale
    i18n.locale.value = locale
    changeLocalPath(locale, router)
  }

  const changeLocalPath = (locale: string, router: Router) => {
    const path = computed(() => router.currentRoute.value.fullPath)
    const replacedPath = path.value
      .replace('en-US', locale)
      .replace('zh', locale)
    router.push(replacedPath)
  }

  provide<Context>(LocaleSymbol, {
    state: readonly(state),
    load: loadLocale,
  })
}

export const useLocaleInject = () => {
  const localeContext = inject<Context>(LocaleSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for LocaleSymbol useLocaleProvide`)
  }

  return localeContext
}
