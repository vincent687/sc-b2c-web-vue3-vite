<script setup lang="ts">
  import { onMounted, ref, Ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { FetchJobList } from '@/contexts/job_listing'
  import { useJobsInject } from '@/contexts'
  import {
    FindJobsParams,
    FetchJobListQuery,
    FetchJobListQueryVariables,
  } from '../../graphql/schema'
  import { useQuery, useClient } from 'villus'
  import JobCard from './components/JobCard.vue'

  const route = useRoute()
  const { state, load: loadJobs2 } = useJobsInject()
  const jobs = loadJobs2({
    skip: 0,
    pageSize: 10,
    filter: {
      volunteerFunctions: [route.params.id.toString()],
    },
  })
  // const getMore = (filter: FindJobsParams) => {
  //   useClient({
  //     url: 'https://api.sit.salut.socialcareer.org/graphql',
  //   })
  //   const { data } = useQuery<FetchJobListQuery, FetchJobListQueryVariables>({
  //     query: FetchJobList,
  //     variables: {
  //       params: filter,
  //     },
  //   })
  //   const products = computed(() => data.value?.jobs || [], {})
  //   //setJobState(products)
  //   return products
  // }

  // const test = () => {
  //   jobs = getMore({
  //     skip: 0,
  //     pageSize: 10,
  //     filter: {
  //       volunteerFunctions: [route.params.id.toString()],
  //     },
  //   })
  // }
  // test()

  //defineProps<{ data: FetchJobListQuery['jobs'] }>()
</script>

<template>
  {{ state }}
  <main class="py-6">
    <div v-for="job in jobs?.data" :key="job.id!">
      <JobCard :job="job" @click="$emit('click-job', job.id!)" />
    </div>

    <button
      @click="
        loadJobs2({
          skip: 0,
          pageSize: 10,
          filter: {
            volunteerFunctions: [route.params.id.toString()],
          },
        })
      "
    >
      Load more
    </button>
    <!-- <div v-for="job in state.data" :key="job.id!">
      <JobCard :job="job" @click="$emit('click-job', job.id!)" />
    </div> -->

    <!-- <div v-if="postState.data">

      <JobCard v-for="post in postState.data.info" :key="post.id" :post="post" />
    </div> -->
  </main>
</template>
