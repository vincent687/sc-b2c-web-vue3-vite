<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import { useClient } from 'villus'

  useClient({
    url: 'https://api.sit.salut.socialcareer.org/graphql',
    // url: 'https://gateway.api.salut.socialcareer.org/graphql'
  })
</script>

<template>
  <router-view />
</template>
