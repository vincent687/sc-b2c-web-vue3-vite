<script setup lang="ts">
import { onMounted } from 'vue'
import { usePostInject } from '@contexts/post'
import { useJobListingInject } from '@contexts/job_listing'
import Main from './components/main.vue'

const { state: postState, load: loadPosts } = usePostInject()
const { state, load } = useJobListingInject()

onMounted(() => {
  load(), loadPosts('', '')
})
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
    <Main :post-state="postState"></Main>
  </div>

  <div v-else>
    <div class="text-xl"> Unhandled !!! </div>
  </div>
</template>
