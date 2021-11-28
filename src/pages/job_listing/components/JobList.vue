<script setup lang="ts">
import JobCard from './JobCard.vue'
import { ListJobsQuery } from '../../../graphql/schema'

defineProps<{ data: ListJobsQuery['jobs'] }>()
</script>

<template>
  <main class="py-6">
    <JobCard v-for="job in data?.data" :key="job.id!" :job="job" />
  </main>
</template>
