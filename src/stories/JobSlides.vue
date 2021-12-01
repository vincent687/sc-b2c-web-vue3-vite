<script setup lang="ts">
import JobCard from './JobCard.vue'
import { Job } from '@contexts/job_listing'

defineProps<{ jobs: Array<Job> }>()

defineEmits<{
  (e: 'click-job', uuid: string): void
}>()
</script>

<template>
  <div
    class="grid overflow-x-auto overflow-y-hidden grid-flow-col gap-4 grid-rows-job-slides grid-cols-job-slides auto-cols-job-slides md:grid-rows-job-slides--md md:grid-cols-job-slides--md md:auto-cols-job-slides--md"
  >
    <div v-for="job in jobs" :key="job.id!">
      <JobCard :job="job" textColor="green" @click="$emit('click-job', job.id!)" />
    </div>
  </div>
</template>
