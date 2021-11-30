<script setup lang="ts">
import JobCard from './JobCard.vue'
import { ListJobsQuery } from '../../../graphql/schema'

defineProps<{ data: ListJobsQuery['jobs'] }>()
</script>

<template>
  <div
    class="
      grid
      overflow-x-auto overflow-y-hidden
      gap-4
      grid-rows-job-slides grid-cols-job-slides grid-flow-col
      auto-cols-job-slides
    "
  >
    <div v-for="job in data?.data" :key="job.id!">
      <JobCard :job="job" />
    </div>
  </div>
</template>
