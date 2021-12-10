<script setup lang="ts">
  import { useJobsProvide } from '@/contexts/job_listing'
  import { useLocaleInject } from '@/contexts'
  import { useRoute } from 'vue-router'
  import Container from '@/components/Container.vue'
  import JobList from './components/JobList.vue'

  useJobsProvide()

  const { redirect } = useLocaleInject()
  const route = useRoute()
</script>

<template>
  <Container>
    <div class="relative flex">
      <router-link
        class="absolute top-6 bg-gray-300 text-xs"
        :to="redirect('jobs')"
      >
        Back
      </router-link>
    </div>
    <h1
      v-if="route.params.id"
      class="font-bold text-green-400 text-center text-3xl"
    >
      Jobs in {{ route.params.id.toString().toLowerCase() }}
    </h1>
  </Container>

  <JobList></JobList>
</template>
