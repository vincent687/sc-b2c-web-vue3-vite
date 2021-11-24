<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { getUser } from './api/login'
import { ref, onMounted } from 'vue'
import { useProvider } from './contexts'

useProvider()

let user = ref<Object>({})
const fetchResults = async () => {
  const response = await getUser({})
  user.value = response.data
}

onMounted(() => {
  console.log('hi')
  fetchResults()
})
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
