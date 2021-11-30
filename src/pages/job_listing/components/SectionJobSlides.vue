<script setup lang="ts">
import { useQuery } from 'villus'
import { FetchJobList } from '@contexts/job_listing'

import JobSlides from './JobSlides.vue'
import Loading from './Loading.vue'
import Empty from './Empty.vue'
import Unhandled from '@components/Unhandled.vue'
import Error from '@components/Error.vue'

import { FindJobsParams, ListJobsQuery, ListJobsQueryVariables } from '../../../graphql/schema'
import Container from '@components/Container.vue'

const props =
  defineProps<{ backgroundColor: string; title: string; filterParams: FindJobsParams }>()

const { data, isFetching, error } = useQuery<ListJobsQuery, ListJobsQueryVariables>({
  query: FetchJobList,
  variables: {
    params: props.filterParams
  }
})
</script>

<template>
  <div class="pt-10 pb-4" :class="backgroundColor">
    <Container class="h-96">
      <div class="text-2xl mb-3">{{ title }}</div>

      <div v-if="isFetching">
        <Loading />
      </div>

      <div v-else-if="data && data?.jobs?.data">
        <div v-if="data?.jobs?.data!.length! > 0">
          <JobSlides :data="data?.jobs"></JobSlides>
        </div>

        <div v-else>
          <Empty />
        </div>
      </div>

      <div v-else-if="error">
        <Error :message="error?.message!" />
      </div>

      <div v-else>
        <Unhandled />
      </div>
    </Container>
  </div>
</template>
