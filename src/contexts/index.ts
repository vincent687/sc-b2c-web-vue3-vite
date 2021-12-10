import { useLocaleInject, useLocaleProvide } from './locale'
import { useFontSizeInject, useFontSizeProvide } from './font_size'
import { useJobsInject, useJobsProvide } from './job_listing'

export { useLocaleInject, useFontSizeInject, useJobsInject }

export const useProvider = () => {
  useLocaleProvide()
  useFontSizeProvide()
  // useJobsProvide()
}
