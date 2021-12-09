import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { fetchJobListQuery } from '../graphql/queries'
import { FindJobsParams, FetchJobListQuery } from '../graphql/schema'
import client from '../graphql/client'

export type Job = NonNullable<NonNullable<FetchJobListQuery['jobs']>['data']>[0]

export const FetchJobList = computed(() => {
  return fetchJobListQuery
})

export type Data<T> = {
  info: T
}

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
  | { status: 'success'; data: Job[] }

export const useJobsProvide = () => {
  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadJobs = async (filter: FindJobsParams) => {
    const { data } = await client.executeQuery({
      query: fetchJobListQuery,
      variables: {
        params: filter,
      },
    })

    console.log('fetchJobListQueryfetchJobListQuery', data)

    const jobs: Job[] = data.jobs.data as Job[]

    state.value = {
      status: 'success',
      data: jobs,
    }

    return jobs
  }

  provide<Context>(JobSymbol, {
    state: readonly(state),
    isLoading: readonly(isLoading),
    load: loadJobs,
  })
}

export const useJobsInject = () => {
  const localeContext = inject<Context>(JobSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for LocaleSymbol useLocaleProvide`)
  }

  return localeContext
}
