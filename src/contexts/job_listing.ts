import { computed } from 'vue'
import { fetchJobListQuery } from '../graphql/queries'
import { ListJobsQuery } from '../graphql/schema'

export type Job = NonNullable<NonNullable<ListJobsQuery['jobs']>['data']>[0]

export const FetchJobList = computed(() => {
  return fetchJobListQuery
})
