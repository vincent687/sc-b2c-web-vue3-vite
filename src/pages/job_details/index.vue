<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useQuery } from 'villus'
import { FetchJobDetailsQuery, FetchJobDetailsQueryVariables } from '../../graphql/schema'
import { fetchJobDetailsQuery } from '../../graphql/queries'

import Container from '@components/Container.vue'
import Loading from '@components/Loading.vue'
import Error from '@components/Error.vue'
import Unhandled from '@components/Unhandled.vue'

const route = useRoute()

const { data, isFetching, error } = useQuery<FetchJobDetailsQuery, FetchJobDetailsQueryVariables>({
  query: fetchJobDetailsQuery,
  variables: {
    id: route.params.id as string
  }
})
</script>

<template>
  <Container>
    <div v-if="isFetching">
      <Loading />
    </div>

    <div v-else-if="data?.job">
      <router-link :to="'/jobs'">BACK TO JOBS</router-link>
      <div class="text-base"> {{ data.job.ngo?.name }}</div>
      <div class="text-xl"> {{ data.job.title }}</div>
      <hr />
      <div class="text-xl"> {{ data.job.description }}</div>
      <hr />
    </div>

    <div v-else-if="error">
      <Error :message="error.message!" />
    </div>

    <div v-else>
      <Unhandled />
    </div>
  </Container>

  <!-- <div class="container w-full md:max-w-3xl text-left mx-auto pt-20">
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
    </div>
    <div class="font-sans">
      <span class="text-base md:text-sm text-green-500 font-bold"
        >&lt;<span>
          <router-link :to="'/'">BACK TO HOME</router-link>
          <p></p>
          <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {{ post.title }}</h1
          >
          <p class="text-sm md:text-base font-normal text-gray-600">{{ post.date }}</p>
        </span></span
      ></div
    >

    <ImageViewer :url="post.image" />
    <Detail :post="post" />
  </div> -->
</template>
