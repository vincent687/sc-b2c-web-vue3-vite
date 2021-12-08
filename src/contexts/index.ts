import { useLocaleInject, useLocaleProvide } from './locale'
import { useThemeInject, useThemeProvide } from './theme'

export { useLocaleInject, useThemeInject }

export const useProvider = () => {
  useLocaleProvide()
  useThemeProvide()
}
