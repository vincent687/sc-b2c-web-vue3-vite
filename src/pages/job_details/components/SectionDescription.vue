<script setup lang="ts">
  import { defineProps } from 'vue'
  import { Job } from '@contexts/job_details'

  defineProps<{ job: Job }>()
</script>

<template>
  <div class="text-lg font-semibold mb-1">描述</div>
  <div class="text-sm text-gray-600 mb-1">
    {{ job.description }}
  </div>
</template>
