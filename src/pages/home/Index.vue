<script lang="ts">
export default {
  // Specify the layout by either an object or a string.
  // The default value is 'default'.
  layout: 'default'
  // or just `layout../../components/home/main.vuent doesn't have any props.
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

import Main from './components/Main.vue'
import Carousel from '../../components/Carousel.vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

import { useAccountInject, usePostInject } from '../../contexts'

const { state: accountState, load: loadAccount } = useAccountInject()

const { state: postState, load: loadPosts } = usePostInject()

// const selectedCluster = ref<Cluster>('testnet')

onMounted(() => {
  loadAccount('start', '123')
  loadPosts('start', '123')
})
</script>
<template>
  <Carousel></Carousel>
  <Main :post-state="postState"></Main>
</template>
