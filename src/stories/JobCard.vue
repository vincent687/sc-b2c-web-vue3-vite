<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import { computed } from 'vue'
  import { Job } from '../model/job'

  const props = defineProps<{
    job: Job
    backgroundColor: string
    tagColor: string
    textColor: string
  }>()

  defineEmits(['click'])

  const backgroundClasses = computed(() => ({
    [`bg-${props.backgroundColor}-100`]: true,
  }))
  const tagBackgroundClasses = computed(() => ({
    'p-1': true,
    'px-3': true,
    'mb-1': true,
    'inline-block': true,
    'text-xs': true,
    'font-mono': true,
    rounded: true,
    'text-green-800': true,
    'hover:bg-blue-200': true,
    'hover:text-blue-800': true,
    transition: true,
    'duration-300': true,
    'ease-in-out': true,
    //  'bg-red-500': true
    [`bg-${props.tagColor}-500`]: true,
  }))
  const textClasses = computed(() => ({
    'text-base': true,
    'font-light': true,
    'mb-4': true,
    //'text-yellow-600': true,
    'text-opacity-100': true,
    [`text-${props.textColor}-600`]: true,
  }))
</script>

<template>
  <div class="mb-12" @click="$emit('click', job.uuid)">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">
      <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12">
        <div :class="backgroundClasses">
          <img
            width="640px"
            height="360px"
            class="
              rounded
              mb-3
              hover:opacity-70
              transition
              duration-300
              ease-in-out
            "
            alt="thumbnail"
            :src="job.thumbnailImageURL"
          />
        </div>
      </div>

      <div class="flex-1">
        <div class="hover:text-green-400">
          <h2 class="text-2xl font-semibold mb-1">
            {{ job.name }}
          </h2>
        </div>

        <p :class="textClasses">
          Learn how to use Markdown to write blog posts. Understand front-matter
          and how it is used in templates.
        </p>

        <div class="mb-2">
          <div
            v-for="tag in job.tags"
            :key="tag.id"
            :class="tagBackgroundClasses"
            href="/category/development"
          >
            {{ tag.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
