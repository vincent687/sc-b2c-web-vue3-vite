<script setup lang="ts">
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'
import Container from '@components/Container.vue'
</script>

<template>
  <Container>
    <Header />
  </Container>

  <router-view />

  <Footer />
</template>
