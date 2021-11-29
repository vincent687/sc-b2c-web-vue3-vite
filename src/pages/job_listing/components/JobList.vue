<script setup lang="ts">
import JobCard from './JobCard.vue'
import { ListJobsQuery } from '../../../graphql/schema'

defineProps<{ data: ListJobsQuery['jobs'] }>()
</script>

<template>
  <div
    class="
      h-96
      grid
      overflow-x-auto overflow-y-hidden
      gap-4
      grid-rows-job-list grid-cols-job-list grid-flow-col
      auto-cols-job-list
    "
  >
    <div v-for="job in data?.data" :key="job.id!">
      <JobCard :job="job" />
    </div>
  </div>
</template>
