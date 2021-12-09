<script lang="ts">
  export default {
    layout: 'raw',
  }
</script>

<script setup lang="ts">
  import { ref, reactive } from '@vue/reactivity'
  import Container from '@/components/Container.vue'

  const count = ref(0)
</script>

<template>
  <Container>
    <div class="h-screen w-100 flex justify-center items-center">
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <div class="text-xl">{{ count }}</div>
        </div>
        <div class="col-span-12">
          <button class="btn-primary" @click="count++">+1</button>
        </div>
      </div>
    </div>
  </Container>
</template>
