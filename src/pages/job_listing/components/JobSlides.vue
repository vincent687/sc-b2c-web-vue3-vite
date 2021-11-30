<script setup lang="ts">
import JobCard from './JobCard.vue'
import { FetchJobListQuery } from '../../../graphql/schema'

defineProps<{ data: FetchJobListQuery['jobs'] }>()

defineEmits<{
  (e: 'click-job', uuid: string): void
}>()
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
      <JobCard :job="job" @click="$emit('click-job', job.id!)" />
    </div>
  </div>
</template>
