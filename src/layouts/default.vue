<script setup lang="ts">
import Header from '@components/header.vue'
import Footer from '@components/footer.vue'
import Container from '@components/Container.vue'
</script>

<template>
  <Container>
    <Header></Header>
  </Container>

  <router-view />

  <Container>
    <Footer></Footer>
  </Container>
</template>
