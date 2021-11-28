import { computed } from 'vue'
import { ListJobsQuery } from '../graphql/schema'

export type Job = NonNullable<NonNullable<ListJobsQuery['jobs']>['data']>[0]

export const FetchJobList = computed(() => {
  return `
  query listJobs($params: FindJobsParams) {
    jobs(params: $params) {
      total
      data {
        id
        ngo {
          id
          name
        }
        title
        description
        recipients
        imageUrls
        quota
        remainingQuota
        acceptedApplications
        pendingApplications
        overallStart
        overallEnd
        location
      }
    }
  }  
  `
})
