<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import Detail from '../components/postDetail/detail.vue'
  import { onMounted, ref } from 'vue'

  import { getPostDetail } from '../api/post'

  const route = useRoute()
  let post = ref({})
  onMounted(() => {
    const id = route.params.id

    getPostDetail(parseInt(id[0])).then((res) => {
      debugger
      post.value = res.data
    })
  })
</script>

<template>
  <main class="py-6">
    <Detail :post="post" />
  </main>
</template>
