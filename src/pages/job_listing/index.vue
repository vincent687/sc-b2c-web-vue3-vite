<script setup lang="ts">
import { onMounted } from 'vue'
import { useJobListingInject } from '@contexts/job_listing'

const { state, load } = useJobListingInject()

onMounted(() => load())
</script>

<template>
  <div v-if="state.status === 'loading'">
    <div class="text-xl"> LOADING ........ </div>
  </div>

  <div v-else-if="state.status === 'empty'">
    <div class="text-xl"> NO JOBS !!! </div>
  </div>

  <div v-else-if="state.status === 'success'">
    {{ state.data.jobs }}
  </div>

  <div v-else>
    <div class="text-xl"> Unhandled !!! </div>
  </div>
</template>
