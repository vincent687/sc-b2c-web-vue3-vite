import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { fetchJobListQuery } from '../graphql/queries'
import { FindJobsParams, FetchJobListQuery } from '../graphql/schema'
import client from '../graphql/client'

export type Job = NonNullable<NonNullable<FetchJobListQuery['jobs']>['data']>[0]

export const FetchJobList = computed(() => {
  return fetchJobListQuery
})

const JobSymbol = Symbol()

export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindJobsParams) => Promise<Job[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Job[]; total: number }

export const useJobsProvide = () => {
  const jobsCache = ref<Job[]>([])

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadJobs = async (params: FindJobsParams) => {
    const { data } = await client.executeQuery({
      query: fetchJobListQuery,
      variables: { params },
    })

    const jobs: Job[] = data.jobs.data as Job[]
    jobsCache.value = [...jobsCache.value, ...jobs]

    state.value =
      data !== null
        ? { status: 'success', data: jobsCache.value, total: data.jobs.total }
        : { status: 'error', error: 'unable to load account' }

    return jobs
  }

  provide<Context>(JobSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadJobs,
  })
}

export const useJobsInject = () => {
  const localeContext = inject<Context>(JobSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
