<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Job } from '@contexts/job_listing'
import { computed } from '@vue/reactivity'

const props = defineProps<{ job: Job }>()

const thumbnailUrl = computed(() =>
  props.job.imageUrls
    ? props.job.imageUrls[0]
    : 'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg'
)

defineEmits<{
  (e: 'click', uuid: string): void
}>()
</script>

<template>
  <div @click="$emit('click', job.id!)">
    <div class="flex flex-col cursor-pointer">
      <img
        class="w-full rounded-xl h-56 object-cover mb-3"
        :alt="job.title"
        :src="thumbnailUrl!"
      >

      <div class="text-sm font-light text-gray-600 mb-1">
        {{ job.ngo?.name }}
      </div>

      <div class="hover:text-green-400">
        <h2 class="text-lg font-semibold">
          {{ job.title }}
        </h2>
      </div>
    </div>
  </div>
</template>
