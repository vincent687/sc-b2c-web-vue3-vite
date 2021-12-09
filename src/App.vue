<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import { useProvider } from './contexts'
  import { useClient } from 'villus'
  //import { useFontSizeInject } from '@/contexts'

  // useProvider()
  useClient({
    url: 'https://api.sit.salut.socialcareer.org/graphql',
    // url: 'https://gateway.api.salut.socialcareer.org/graphql'
  })
  useProvider()
  //const { currentFontSize } = useFontSizeInject()
</script>

<template>
  <div class="font-sans bg-white dark:bg-gray-700">
    <!-- <div class="font-sc"> -->
    <router-view />
  </div>
</template>

<style>
  .font-resize {
    /* font-size: v-bind(currentFontSize);
  */
  }
</style>
