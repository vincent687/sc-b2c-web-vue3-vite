<script setup lang="ts">
import Header from '../src/components/header.vue'
import Footer from '../src/components/footer.vue'
</script>

<template>
  <div class="container mx-auto px-6 md:px-4">
    <Header></Header>
  </div>
  <router-view />
  <Footer></Footer>
</template>
