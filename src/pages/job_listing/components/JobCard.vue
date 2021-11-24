<script setup lang="ts">
import { Job } from '@contexts/job_listing'

defineProps<{ job: Job }>()

defineEmits<{
  (e: 'click', uuid: string): void
}>()
</script>

<template>
  <div class="mb-12" @click="$emit('click', job.uuid)">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">
      <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12">
        <div class="bg-gray-100">
          <img
            width="640"
            height="360"
            class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out"
            alt="thumbnail"
            :src="job.thumbnailImageURL"
        /></div>
      </div>

      <div class="flex-1">
        <div class="hover:text-green-400">
          <h2 class="text-2xl font-semibold mb-1">{{ job.name }}</h2>
        </div>

        <p class="text-base font-light text-gray-600 mb-4"
          >Learn how to use Markdown to write blog posts. Understand front-matter and how it is used
          in templates.</p
        >

        <div class="mb-2">
          <div
            v-for="tag in job.tags"
            :key="tag.id"
            class="
              p-1
              px-3
              mr-1
              mb-1
              inline-block
              text-xs
              font-mono
              rounded
              bg-green-200
              text-green-800
              hover:bg-blue-200 hover:text-blue-800
              transition
              duration-300
              ease-in-out
            "
            href="/category/development"
            >{{ tag.name }}</div
          >
        </div>
      </div>
    </div>
  </div>
</template>
