<script setup lang="ts">
import JobCard from './JobCard.vue'
import { Data } from '@contexts/job_listing'

defineProps<{ data: Data }>()
</script>

<template>
  <main class="py-6">
    <JobCard v-for="job in data.jobs" :key="job.uuid" :job="job" />
  </main>
</template>
