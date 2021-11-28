<script setup lang="ts">
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
  <div class="mb-12" @click="$emit('click', job.id!)">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">
      <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12">
        <div class="bg-gray-100">
          <img
            width="640"
            height="360"
            class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out"
            alt="thumbnail"
            :src="thumbnailUrl!"
        /></div>
      </div>

      <div class="flex-1">
        <div class="hover:text-green-400">
          <h2 class="text-2xl font-semibold mb-1">{{ job.title }}</h2>
        </div>

        <p class="text-base font-light text-gray-600 mb-4">{{ job.description }}</p>
      </div>
    </div>
  </div>
</template>
