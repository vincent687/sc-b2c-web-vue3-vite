<script setup lang="ts">
import { defineProps } from 'vue'
import { Job } from '@contexts/job_details'

defineProps<{ job: Job }>()
</script>

<template>
  <div class="text-xs text-gray-600 mb-1">
    {{ job.ngo?.name }}
  </div>
  <div class="text-lg font-semibold mb-1">
    {{ job.title }}
  </div>
  <div class="text-sm mb-1">
    {{ job.location }}
  </div>
</template>
