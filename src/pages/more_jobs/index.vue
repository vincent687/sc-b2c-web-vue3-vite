<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useRoute } from 'vue-router'
  import { useJobsInject } from '@/contexts'
  import JobCard from './components/JobCard.vue'
  import { useLocaleInject } from '@/contexts'
  import Container from '@/components/Container.vue'

  const { redirect } = useLocaleInject()
  const route = useRoute()
  const router = useRouter()
  const { state, load } = useJobsInject()

  const counter = ref(0)

  const loadPost = () => {
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

  loadPost()
</script>

<template>
  <Container>
    <div class="relative">
      <router-link
        class="absolute top-6 bg-gray-300 text-xs"
        :to="redirect('jobs')"
      >
        BACK TO Job
      </router-link>
    </div>
  </Container>

  <main class="pt-24 container mx-auto px-2 md:px-2 lg:px-40">
    <div v-if="state.status === 'success'">
      <div v-for="job in state.data" :key="job.id!">
        <JobCard :job="job" @click="jobClicked(job.id!)" />
      </div>

      <button
        v-if="state.total > state.data.length"
        class="w-full my-5 bg-yellow-400 hover:bg-yellow-300 text-white-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
        @click="loadPost()"
      >
        Load more
      </button>
    </div>
  </main>
</template>
