<script setup lang="ts">
import { onMounted } from 'vue'
import { useJobListingInject } from '@contexts/job_listing'

import JobList from './components/JobList.vue'
import Loading from './components/Loading.vue'
import Empty from './components/Empty.vue'
import Unhandled from '@components/Unhandled.vue'

const { state, load } = useJobListingInject()

onMounted(() => load())
</script>

<template>
  <div v-if="state.status === 'loading'">
    <Loading />
  </div>

  <div v-else-if="state.status === 'empty'">
    <Empty />
  </div>

  <div v-else-if="state.status === 'success'">
    <JobList :data="state.data"></JobList>
  </div>

  <div v-else>
    <Unhandled />
  </div>
</template>
