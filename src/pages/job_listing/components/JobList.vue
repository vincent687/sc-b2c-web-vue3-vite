<script setup lang="ts">
//import JobCard from './JobCard.vue'
import { Data } from '@contexts/job_listing'
import JobCard from '@vincent687/storybook/JobCard.vue'

defineProps<{ data: Data }>()
defineEmits<{
  (e: 'click', uuid: string): void
}>()
</script>

<template>
  <main class="py-6">
    <JobCard
      v-for="job in data.jobs"
      :key="job.uuid"
      :job="job"
      tagColor="gray"
      @click="$emit('click', value)"
    />
  </main>
</template>
