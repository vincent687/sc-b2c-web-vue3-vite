<script setup lang="ts">
  import { useRoute } from 'vue-router'

  import { useQuery } from 'villus'
  import {
    FetchJobDetailsQuery,
    FetchJobDetailsQueryVariables,
  } from '../../graphql/schema'
  import { fetchJobDetailsQuery } from '../../graphql/queries'

  import Loading from '@components/Loading.vue'
  import Error from '@components/Error.vue'
  import Unhandled from '@components/Unhandled.vue'
  import SectionHero from './components/SectionHero.vue'
  import SectionSummary from './components/SectionSummary.vue'
  import Container from '@components/Container.vue'
  import SectionDescription from './components/SectionDescription.vue'
  import Separator from './components/Separator.vue'

  const route = useRoute()

  const { data, isFetching, error } = useQuery<
    FetchJobDetailsQuery,
    FetchJobDetailsQueryVariables
  >({
    query: fetchJobDetailsQuery,
    variables: {
      id: route.params.id as string,
    },
  })
</script>

<template>
  <div v-if="isFetching">
    <Loading />
  </div>

  <div v-else-if="data?.job">
    <SectionHero :image-urls="data.job.imageUrls" />

    <Container>
      <div class="mt-2" />

      <SectionSummary :job="data.job" />
      <Separator />

      <SectionDescription :job="data.job" />
      <Separator />

      <div class="mb-2" />
    </Container>
  </div>

  <div v-else-if="error">
    <Error :message="error.message!" />
  </div>

  <div v-else>
    <Unhandled />
  </div>
</template>
