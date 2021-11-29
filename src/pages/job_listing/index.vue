<script setup lang="ts">
import { useQuery } from 'villus'
import { FetchJobList } from '@contexts/job_listing'

import JobSlides from './components/JobSlides.vue'
import Loading from './components/Loading.vue'
import Empty from './components/Empty.vue'
import Unhandled from '@components/Unhandled.vue'
import Error from '@components/Error.vue'

import { ListJobsQuery, ListJobsQueryVariables } from '../../graphql/schema'

const { data, isFetching, error } = useQuery<ListJobsQuery, ListJobsQueryVariables>({
  query: FetchJobList,
  variables: {
    params: {
      skip: 0,
      pageSize: 10
    }
  }
})
</script>

<template>
  <div v-if="isFetching">
    <Loading />
  </div>

  <div v-else-if="data && data?.jobs?.data">
    <div v-if="data.jobs.data.length > 0">
      <JobSlides :data="data?.jobs"></JobSlides>

      <JobSlides :data="data?.jobs"></JobSlides>
    </div>

    <div v-else>
      <Empty />
    </div>
  </div>

  <div v-else-if="error">
    <Error :message="error.message" />
  </div>

  <div v-else>
    <Unhandled />
  </div>
</template>
