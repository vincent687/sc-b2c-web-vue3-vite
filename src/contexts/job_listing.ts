import { computed } from 'vue'
import { fetchJobListQuery } from '../graphql/queries'
import { FetchJobListQuery } from '../graphql/schema'

export type Job = NonNullable<NonNullable<FetchJobListQuery['jobs']>['data']>[0]

export const FetchJobList = computed(() => {
  return fetchJobListQuery
})
