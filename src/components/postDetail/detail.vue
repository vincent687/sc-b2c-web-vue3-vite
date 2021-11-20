<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Post } from '../../contexts/post'

  defineProps<{ post: Post }>()
</script>

<template>
  <main class="py-6">
    <div>
      {{ post.title }}
    </div>
    <div>
      {{ post.description }}
    </div>
  </main>
</template>
