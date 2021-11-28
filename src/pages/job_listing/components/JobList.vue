<script setup lang="ts">
import JobCard from './JobCard.vue'
import { Data } from '@contexts/job_listing'

defineProps<{ data: Data }>()
</script>

<template>
  <main class="py-6">
    <div v-if="data.jobs$?.data">
      <div v-for="job in data.jobs$.data">{{job.id!}}</div>
    </div>
    <JobCard v-for="job in data.jobs" :key="job.uuid" :job="job" />
  </main>
</template>
