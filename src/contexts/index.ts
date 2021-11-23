import { useAccountProvide, useAccountInject } from './account'
import { usePostProvide, usePostInject } from './post'
import { useJobListingProvide, useJobListingInject } from './job_listing'

export { useAccountInject, usePostInject, useJobListingInject }

export const useProvider = () => {
  useAccountProvide()
  usePostProvide()
  useJobListingProvide()
}
