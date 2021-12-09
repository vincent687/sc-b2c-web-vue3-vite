<script setup lang="ts">
  import { useJobsProvide } from '@/contexts/job_listing'
  import { useLocaleInject } from '@/contexts'
  import Container from '@/components/Container.vue'
  import JobList from './components/JobList.vue'

  useJobsProvide()

  const { redirect } = useLocaleInject()
</script>

<template>
  <Container>
    <div class="relative">
      <router-link
        class="absolute top-6 bg-gray-300 text-xs"
        :to="redirect('jobs')"
      >
        Back
      </router-link>
    </div>
  </Container>

  <JobList></JobList>
</template>
