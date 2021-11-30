<script setup lang="ts">
import SectionJobSlides from './components/SectionJobSlides.vue'
import SectionHero from './components/SectionHero.vue'
</script>

<template>
  <SectionHero />

  <SectionJobSlides
    background-color="bg-gray-100"
    title="Editor Choices"
    :filter-params="{
      skip: 0,
      pageSize: 10,
      filter: {
        volunteerFunctions: ['FEATURED']
      }
    }"
  />

  <SectionJobSlides
    title="Visiting"
    background-color="bg-grey-100"
    :filter-params="{
      skip: 0,
      pageSize: 10,
      filter: {
        volunteerFunctions: ['VISIT']
      }
    }"
  />

  <SectionJobSlides
    title="Happening Now"
    background-color="bg-yellow-100"
    :filter-params="{
      skip: 0,
      pageSize: 10,
      filter: {
        volunteerFunctions: ['MICRO_VOLUNTEERING']
      }
    }"
  />
</template>
