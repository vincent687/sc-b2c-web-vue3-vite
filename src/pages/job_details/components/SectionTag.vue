<script setup lang="ts">
  import { defineProps } from 'vue'
  import { Job } from '@/contexts/job_details'

  const props = defineProps<{
    tags: Job['languages']
    title: string
    type: string
  }>()
</script>

<template>
  <div class="text-lg font-semibold mb-1">
    {{ props.title }}
  </div>
  <div class="flex">
    <div
      v-for="tag in props.tags"
      :key="tag || ''"
      class="text-sm text-gray-600 mb-1"
    >
      <div
        :class="{
          'bg-green-200 text-black-700': props.type === 'success',
          'bg-red-200 text-black-700': props.type === 'danger',
        }"
        class="mr-1.5 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
