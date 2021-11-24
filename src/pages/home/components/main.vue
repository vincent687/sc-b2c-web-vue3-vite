<script setup lang="ts">
import Post from '../../../components/post.vue'
import { onMounted } from 'vue'
import { State } from '../../../contexts/post'

defineProps<{ postState: State }>()
</script>

<template>
  <main class="py-6">
    <div v-if="postState.data">
      <Post v-for="post in postState.data.info" :key="post.id" :post="post" />
    </div>
  </main>
</template>
