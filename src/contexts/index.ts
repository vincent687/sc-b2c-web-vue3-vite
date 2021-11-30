import { useAccountProvide, useAccountInject } from './account'
import { usePostProvide, usePostInject } from './post'

export { useAccountInject, usePostInject }

export const useProvider = () => {
  useAccountProvide()
  usePostProvide()
}
