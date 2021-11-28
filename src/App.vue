<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { useProvider } from './contexts'
import { prepass } from 'gqty'
import { query } from './gqty'

useProvider()

// FIXME caveat to gqty where skeleton rendering do not seem to work in vue yet
const q = query.jobs!({ params: { skip: 0, pageSize: 10 } })
const p = prepass(q, '*')
</script>

<template>
  <router-view />
</template>
