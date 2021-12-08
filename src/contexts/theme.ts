import { inject, provide, readonly, Ref, ref } from 'vue'

const ThemeSymbol = Symbol()

export enum ThemeColor {
  dark = 'darkgrey',
  light = 'white',
}

export type Context = {
  currentTheme: Ref<string>
  change: (theme: string) => void
}

export const useThemeProvide = () => {
  const state = ref<string>('white')

  const changeTheme = (theme: string) => {
    state.value = theme
  }

  provide<Context>(ThemeSymbol, {
    currentTheme: readonly(state),
    change: changeTheme,
  })
}

export const useThemeInject = () => {
  const themeContext = inject<Context>(ThemeSymbol)

  if (!themeContext) {
    throw new Error(`no provider found for LocaleSymbol useLocaleProvide`)
  }

  return themeContext
}
