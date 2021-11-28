<script setup lang="ts">
import { onMounted } from 'vue'
import { useJobListingInject } from '@contexts/job_listing'
import { query, resolved, inlineResolved } from '../../gqty'
import { prepass, getArrayFields, getFields, selectFields } from 'gqty'

import JobList from './components/JobList.vue'
import Loading from './components/Loading.vue'
import Empty from './components/Empty.vue'
import Unhandled from '@components/Unhandled.vue'

const { state, load } = useJobListingInject()

// const q = query.jobs!({ params: { skip: 0, pageSize: 10 } })
// const p = prepass(q, 'data.title', 'data.description')

// const q = query.job!({ id: 'ad042069-d5d8-483a-8592-67bbf7feaada' })
// resolved(async () => q).then(async (data) => console.debug('sssssss', await data))

onMounted(() => {
  load()

  // const q = query.jobs!({ params: { skip: 0, pageSize: 10 } })
  // const p = prepass(q, 'data.title', 'data.description')
  // const qq = getFields(q, 'data')

  // resolved(async () => p, {
  //   // noCache: true,
  //   // refetch: true
  // })
  //   .then(async (data) => {
  //     // const got = await data
  //     // console.log('gotgotgot', got)
  //     // if (got?.data) {
  //     //   const yeah = getArrayFields(got?.data, 'title')
  //     //   resolved(() => yeah).then((dd) => console.debug('dd', dd))
  //     //   console.log('yeah', (await yeah)[0].title)
  //     // }
  //   })
  //   .catch((err) => {
  //     console.log('errerrerr', err)
  //   })
})
</script>

<template>
  <div v-if="state.status === 'loading'">
    <Loading />
  </div>

  <div v-else-if="state.status === 'empty'">
    <Empty />
  </div>

  <div v-else-if="state.status === 'success'">
    !{{ q?.title }}!
    <JobList :data="state.data"></JobList>
  </div>

  <div v-else-if="state.status === 'error'">
    {{ state.error }}
  </div>

  <div v-else>
    {{ state.status }}
    <Unhandled />
  </div>
</template>
