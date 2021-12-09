<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Container from '@/components/Container.vue'

  import { useFontSizeInject } from '@/contexts'

  const { currentFontSize } = useFontSizeInject()
</script>

<template>
  <div class="font-resize">
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
  </div>
</template>

<style>
  * {
    font-size: v-bind(currentfontsize);
  }

  .slide-fade-enter-active {
    transition: all 0.4s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }
</style>
