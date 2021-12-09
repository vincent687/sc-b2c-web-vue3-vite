<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { useProvider } from './contexts'

  useProvider()
</script>

<template>
  <div class="font-sans bg-white dark:bg-gray-700">
    <!-- <div class="font-sc"> -->
    <router-view />
  </div>
</template>
