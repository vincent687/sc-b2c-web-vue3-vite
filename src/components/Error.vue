<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ message: string }>()
</script>

<template>
  <div class="text-xl">
    Error
  </div>
  <div class="text-sm">
    {{ message }}
  </div>
</template>
