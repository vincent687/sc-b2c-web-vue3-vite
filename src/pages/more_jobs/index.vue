<script setup lang="ts">
  import { defineEmits } from 'vue'
  import { useRoute } from 'vue-router'
  import { useJobsInject } from '@/contexts'
  import JobCard from './components/JobCard.vue'

  const route = useRoute()
  const { state, load } = useJobsInject()

  defineEmits<{
    (e: 'click-job', uuid: string): void
  }>()

  load({
    skip: 0,
    pageSize: 10,
    filter: {
      volunteerFunctions: [route.params.id.toString()],
    },
  })
</script>

<template>
  <main class="py-6">
    <div v-if="state.status === 'success'">
      <div v-for="job in state.data" :key="job.id!">
        <JobCard :job="job" @click="$emit('click-job', job.id!)" />
      </div>

      <button
        @click="
          load({
            skip: 0,
            pageSize: 10,
            filter: {
              volunteerFunctions: [route.params.id.toString()],
            },
          })
        "
      >
        Load more
      </button>
    </div>
  </main>
</template>
