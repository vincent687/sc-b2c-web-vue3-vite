<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Container from '@/components/Container.vue'
</script>

<template>
  <Container>
    <Header />
  </Container>

  <router-view v-slot="{ Component, route }">
    <transition name="slide-fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>

  <Footer />
</template>

<style>
  .slide-fade-enter-active {
    transition: all 0.2s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(4px);
    opacity: 0;
  }
</style>
