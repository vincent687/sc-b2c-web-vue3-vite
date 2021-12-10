<script setup lang="ts">
  import { defineProps } from 'vue'
  import { Job } from '@/contexts/job_details'

  defineProps<{ job: Job }>()
</script>

<template>
  <div class="text-lg font-semibold mb-1">
    {{ $t('jobDetails.enquiry') }}
  </div>
  <div v-if="job.contact" class="flex text-sm text-gray-600 mb-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    {{ job.contact }}
  </div>

  <div v-if="job.contactEmail" class="flex text-sm text-gray-600 mb-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
    {{ job.contactEmail }}
  </div>
  <div v-if="job.contactPhone" class="flex text-sm text-gray-600 mb-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
    {{ job.contactPhone }}
  </div>
</template>
