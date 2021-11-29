<script setup lang="ts">
import Header from '../src/components/header.vue'
import Footer from '../src/components/footer.vue'
import Container from '../src/components/Container.vue'
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
