<script setup lang="ts">
import SectionJobSlides from './components/SectionJobSlides.vue'
</script>

<template>
  <SectionJobSlides
    :filter-params="{
      skip: 0,
      pageSize: 10,
      filter: {
        volunteerFunctions: ['FEATURED']
      }
    }"
  />

  <SectionJobSlides
    :filter-params="{
      skip: 0,
      pageSize: 10,
      filter: {
        volunteerFunctions: ['MICRO_VOLUNTEERING']
      }
    }"
  />
</template>
