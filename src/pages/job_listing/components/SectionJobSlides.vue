<script setup lang="ts">
  import { defineProps } from 'vue'
  import { useQuery } from 'villus'
  import { useRouter } from 'vue-router'
  import JobSlides from './JobSlides.vue'
  import Loading from './Loading.vue'
  import Empty from './Empty.vue'
  import Unhandled from '@/components/Unhandled.vue'
  import Error from '@/components/Error.vue'
  import Container from '@/components/Container.vue'
  import Title from '@vincent687/sc-storybook/TextTitle.vue'
  import { FetchJobList } from '@/contexts/job_listing'
  import {
    FindJobsParams,
    FetchJobListQuery,
    FetchJobListQueryVariables,
  } from '../../../graphql/schema'

  import { useLocaleInject } from '@/contexts'
  const { redirect } = useLocaleInject()

  const router = useRouter()

  const props = defineProps<{
    backgroundColor: string
    title: string
    filterParams: FindJobsParams
  }>()

  const { data, isFetching, error } = useQuery<
    FetchJobListQuery,
    FetchJobListQueryVariables
  >({
    query: FetchJobList,
    variables: {
      params: props.filterParams,
    },
  })

  const jobClicked = (uuid: string) => {
    router.push({ name: 'JobDetails', params: { id: uuid } })
  }
</script>

<template>
  <div class="pt-10 pb-1" :class="backgroundColor">
    <Container class="h-96">
      <div class="flex flex-row justify-between">
        <div class="text-2xl mb-3">
          {{ title }}
        </div>
        <router-link
          v-if="data?.jobs?.data!.length! > 0"
          class="text-xs"
          :to="
            redirect(`more_jobs/${filterParams?.filter?.volunteerFunctions![0]}`)
          "
        >
          <Title detail="See more >" status="success"></Title>
        </router-link>
      </div>

      <!-- explain on mode="out-in" -->
      <!-- https://v3.vuejs.org/guide/transitions-enterleave.html#transition-modes -->
      <transition name="fade" mode="out-in">
        <div v-if="isFetching">
          <Loading />
        </div>

        <div v-else-if="data && data?.jobs?.data">
          <div v-if="data?.jobs?.data!.length! > 0">
            <JobSlides :data="data?.jobs" @click-job="jobClicked" />
          </div>

          <div v-else>
            <Empty />
          </div>
        </div>

        <div v-else-if="error">
          <Error :message="error?.message!" />
        </div>

        <div v-else>
          <Unhandled />
        </div>
      </transition>
    </Container>
  </div>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
