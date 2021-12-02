<script setup lang="ts">
  import { defineProps } from 'vue'
  import { Job } from '@contexts/job_details'

  defineProps<{ imageUrls: Job['imageUrls'] }>()
</script>

<template>
  <div class="w-full h-52 sm:h-64 relative">
    <router-link class="absolute top-6 left-6 bg-gray-300" :to="'/jobs'">
      BACK TO JOBS
    </router-link>
    <img
      class="w-full h-full object-cover"
      alt="Good. For you."
      :src="imageUrls![0]!"
    />
  </div>
</template>
