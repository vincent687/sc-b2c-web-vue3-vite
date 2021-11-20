<script setup lang="ts">
  import { ref } from 'vue'
  import { getUser } from '../../api/login'
  import { onMounted } from 'vue'

  import Main from '../../components/home/Main.vue'
  import Carousel from '../../components/global/Carousel.vue'
  import Header from '../../components/global/Header.vue'
  import Footer from '../../components/global/Footer.vue'

  import { useAccountInject, usePostInject } from '../../contexts'

  const { state: accountState, load: loadAccount } = useAccountInject()

  const { state: postState, load: loadPosts } = usePostInject()

  // const selectedCluster = ref<Cluster>('testnet')

  onMounted(() => {
    console.log('hi')
    loadAccount('start', '123')
    loadPosts('start', '123')
  })
</script>

<template>
  <div class="container mx-auto px-6 md:px-4">
    <Header></Header>
    <Carousel></Carousel>
    <Main :post-state="postState"></Main>
    <Footer></Footer>
  </div>
</template>
