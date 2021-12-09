import { Ref, ref, ComputedRef, computed, inject, provide } from 'vue'
import { fetchJobListQuery } from '../graphql/queries'
import {
  FindJobsParams,
  FetchJobListQuery,
  FetchJobListQueryVariables,
} from '../graphql/schema'
import { useQuery, useClient, createClient, Client } from 'villus'
import { data } from 'cypress/types/jquery'

export type Job = NonNullable<NonNullable<FetchJobListQuery['jobs']>['data']>[0]

export const FetchJobList = computed(() => {
  return fetchJobListQuery
})

export type Data<T> = {
  info: T
}

const JobSymbol = Symbol()

export type Context = {
  state: Ref<any>
  //  isLoading: Ref<boolean>
  load: (
    filter: FindJobsParams
  ) => ComputedRef<FetchJobListQuery['jobs'] | never[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | {
      status: 'success'
      data: FetchJobListQuery
    }

export const useJobsProvide = () => {
  //const state = ref<State>({ status: 'init' })
  //const isLoading = computed(() => state.value.status === 'loading')

  const state = ref([])
  const setJobState = (jobs: FetchJobListQuery['jobs'] | never[]) => {
    //state.value.push(jobs?.data)
  }
  const loadJobs1 = (filter: FindJobsParams) => {
    createClient({
      url: 'https://api.sit.salut.socialcareer.org/graphql',
      // url: 'https://gateway.api.salut.socialcareer.org/graphql'
    })

    const { data } = useQuery<FetchJobListQuery, FetchJobListQueryVariables>({
      query: FetchJobList,
      variables: {
        params: filter,
      },
    })
    const products = computed(() => data.value?.jobs || [], {
      onTrigger(e) {
        // triggered when count.value is mutated
        setJobState(data.value?.jobs)
      },
    })
    //setJobState(products)
    return products
  }

  provide<Context>(JobSymbol, {
    state: state,
    //  isLoading: readonly(isLoading),
    load: loadJobs1,
  })
}

export const useJobsInject = () => {
  const localeContext = inject<Context>(JobSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for LocaleSymbol useLocaleProvide`)
  }

  return localeContext
}
