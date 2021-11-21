<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import ImageViewer from '../components/postDetail/imageViewer.vue'
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
  <div class="container w-full md:max-w-3xl text-left mx-auto pt-20">
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
    </div>
    <div class="font-sans">
      <span class="text-base md:text-sm text-green-500 font-bold"
        >&lt;<span>
          <router-link :to="'/'">BACK TO HOME</router-link>
          <p></p>
          <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {{ post.title }}</h1
          >
          <p class="text-sm md:text-base font-normal text-gray-600">{{ post.date }}</p>
        </span></span
      ></div
    >

    <ImageViewer :url="post.image" />
    <Detail :post="post" />
  </div>
</template>
