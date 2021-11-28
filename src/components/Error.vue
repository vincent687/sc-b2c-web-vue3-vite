<script setup lang="ts">
defineProps<{ message: String }>()
</script>

<template>
  <div class="text-xl">Error</div>
  <div class="text-sm">{{ message }}</div>
</template>
