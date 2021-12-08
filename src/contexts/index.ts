import { useLocaleInject, useLocaleProvide } from './locale'
import { useFontSizeInject, useFontSizeProvide } from './fontSize'

export { useLocaleInject, useFontSizeInject }

export const useProvider = () => {
  useLocaleProvide()
  useFontSizeProvide()
}
