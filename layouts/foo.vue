import { default } from './foo.vue';
<!-- layouts/foo.vue -->
<template>
  <div>
    <h1>{{ title }} Foo Layout</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
defineProps<{ type: string; default: 'hello' }>()
</script>
