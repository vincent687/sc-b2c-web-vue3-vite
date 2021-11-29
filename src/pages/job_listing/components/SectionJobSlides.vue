<script setup lang="ts">
import { useQuery } from 'villus'
import { FetchJobList } from '@contexts/job_listing'

import JobSlides from './JobSlides.vue'
import Loading from './Loading.vue'
import Empty from './Empty.vue'
import Unhandled from '@components/Unhandled.vue'
import Error from '@components/Error.vue'

import { FindJobsParams, ListJobsQuery, ListJobsQueryVariables } from '../../../graphql/schema'

const props = defineProps<{ filterParams: FindJobsParams }>()

const { data, isFetching, error } = useQuery<ListJobsQuery, ListJobsQueryVariables>({
  query: FetchJobList,
  variables: {
    params: props.filterParams
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
