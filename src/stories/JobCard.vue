<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Job } from '@contexts/job_listing'

const props = defineProps<{ job: Job; textColor: String }>()
const thumbnailUrl = computed(() =>
  props.job.imageUrls
    ? props.job.imageUrls[0]
    : 'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg'
)

const emit = defineEmits(['click'])

const textClasses = computed(() => ({
  // 'hover:text-red-400': true
  [`hover:text-${props.textColor}-400`]: true
}))
</script>

<template>
  <!-- <div> </div> -->
  <div @click="$emit('click', job.id!)">
    <div class="flex flex-col cursor-pointer">
      <img class="w-full rounded-xl h-56 object-cover mb-3" :alt="job.title" :src="thumbnailUrl!" />

      <div class="text-sm font-light text-gray-600 mb-1">{{ job.ngo?.name }}</div>

      <div :class="textClasses">
        <h2 class="text-lg font-semibold">{{ job.title }}</h2>
      </div>
    </div>
  </div>
</template>
