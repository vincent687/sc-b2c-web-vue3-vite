import gql from 'graphql-tag'

export const fetchJobListQuery = gql`
  query fetchJobList($params: FindJobsParams) {
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

export const fetchJobDetailsQuery = gql`
  query fetchJobDetails($id: ID!) {
    job(id: $id) {
      id
      ngo {
        id
        name
      }
      title
      sdgs
      causes
      recipients
      prerequisite {
        minAge
        maxAge
      }
      description
      remarks
      imageUrls
      volunteerFunctions
      skills
      languages
      languageOther
      parentalConsent
      pcAge
      quota
      remainingQuota
      feeDetail
      applicationStart
      applicationEnd
      contact
      contactEmail
      contactPhone
      acceptedApplications
      pendingApplications
      overallStart
      overallEnd
      jobLink
      location
      applicationRestrictions
      sessions {
        id
        type
        title
        position
        attendanceRule
        attendanceRuleAmount
        frequency
      }
    }
  }
`
