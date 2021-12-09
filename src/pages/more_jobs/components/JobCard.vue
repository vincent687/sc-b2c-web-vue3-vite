<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import { useRouter } from 'vue-router'
  import { computed } from '@vue/reactivity'
  import { Job } from '@/contexts/job_listing'

  const props = defineProps<{ job: Job }>()

  const router = useRouter()

  const thumbnailUrl = computed(() =>
    props.job.imageUrls
      ? props.job.imageUrls[0]
      : 'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg'
  )

  defineEmits<{
    (e: 'click', uuid: string): void
  }>()
  // const goToPostDetail = (id: number) => {
  //   router.push({
  //     path: `/jobDetail/${id}`,
  //   })
  // }
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
            :alt="job.title"
            :src="thumbnailUrl!"
          />
        </div>
      </div>

      <div class="flex-1">
        <div class="hover:text-green-400">
          <h2 class="text-2xl font-semibold mb-1">{{ job.ngo?.name }}</h2>
        </div>

        <p class="text-base font-light text-gray-600 mb-4">
          {{ job.title }}
        </p>
      </div>
    </div>
  </div>
</template>
