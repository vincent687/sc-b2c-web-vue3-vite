<script setup lang="ts">
  import { defineProps } from 'vue'
  import { Job } from '@/contexts/job_details'
  import { useLocaleInject } from '@/contexts'
  import Container from '@/components/Container.vue'

  defineProps<{ imageUrls: Job['imageUrls'] }>()

  const { redirect } = useLocaleInject()
</script>

<template>
  <div class="w-full h-52 sm:h-80">
    <Container>
      <div class="relative">
        <router-link
          class="absolute top-6 bg-gray-300 text-base opacity-70 p-4"
          :to="redirect('jobs')"
        >
          Back
        </router-link>
      </div>
    </Container>

    <img
      class="w-full h-full object-cover"
      alt="Good. For you."
      :src="imageUrls![0]!"
    />
  </div>
</template>
