<script setup lang="ts">
  defineProps<{ url: String }>()
</script>

<template>
  <img :src="url" />
</template>
