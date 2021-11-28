import gql from 'graphql-tag'

export const fetchJobListQuery = gql`
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
