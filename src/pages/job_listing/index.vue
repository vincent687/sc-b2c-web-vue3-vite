<script setup lang="ts">
import SectionJobSlides from './components/SectionJobSlides.vue'
import SectionHero from './components/SectionHero.vue'
import Container from '@components/Container.vue'
</script>

<template>
  <SectionHero />

  <Container>
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
  </Container>
</template>
