<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useRoute } from 'vue-router'

  import { useJobsInject } from '@/contexts/job_listing'
  import JobCard from './JobCard.vue'

  const route = useRoute()
  const router = useRouter()
  const { state, load } = useJobsInject()

  const counter = ref(0)

  const loadMoreJobs = () => {
    load({
      skip: 4 * counter.value,
      pageSize: 4,
      filter: {
        volunteerFunctions: [route.params.id.toString()],
      },
    })
    counter.value++
  }

  const jobClicked = (uuid: string) => {
    router.push({ name: 'JobDetails', params: { id: uuid } })
  }

  loadMoreJobs()
</script>

<template>
  <main class="pt-24 container mx-auto px-2 md:px-2 lg:px-40">
    <div v-if="state.status === 'success'">
      <div v-for="job in state.data" :key="job.id!">
        <JobCard :job="job" @click="jobClicked(job.id!)" />
      </div>

      <button
        v-if="state.total > state.data.length"
        class="w-full mb-12 bg-green-400 hover:bg-green-300 text-white text-xl font-semibold hover:text-white py-3 px-4 border border-green-500 hover:border-transparent rounded"
        @click="loadMoreJobs()"
      >
        Load more
      </button>
    </div>
  </main>
</template>
