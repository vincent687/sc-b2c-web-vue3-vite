import { Locale } from '@/lang'
import { computed, inject, provide, readonly, Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Router } from 'vue-router'

const LocaleSymbol = Symbol()

export type Context = {
  currentLocale: Ref<string>
  change: (locale: string, router: Router) => void
  redirect: (distination: string) => string
}

export const useLocaleProvide = () => {
  const i18n = useI18n()
  const state = ref<string>(i18n.locale.value)

  const changeLocale = (locale: string, router: Router) => {
    state.value = locale
    i18n.locale.value = locale
    changeLocalPath(locale, router)
  }

  const getRedirectPath = (distination: string) => {
    const redirectPath = '/' + state.value + `/${distination}`
    return redirectPath
  }

  const changeLocalPath = (locale: string, router: Router) => {
    const path = computed(() => router.currentRoute.value.fullPath)
    const replacedPath = path.value
      .replace(Locale.en, locale)
      .replace(Locale.zh, locale)
    router.push(replacedPath)
  }

  provide<Context>(LocaleSymbol, {
    currentLocale: readonly(state),
    change: changeLocale,
    redirect: getRedirectPath,
  })
}

export const useLocaleInject = () => {
  const localeContext = inject<Context>(LocaleSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for LocaleSymbol useLocaleProvide`)
  }

  return localeContext
}
