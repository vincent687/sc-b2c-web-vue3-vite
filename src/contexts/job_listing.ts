import { computed, inject, provide, readonly, ref, Ref } from 'vue'

export type Job = {
  name: string
}

export type Data = {
  jobs: Job[]
}

const JobListingSymbol = Symbol()

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Data }

export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  isEmpty: Ref<boolean>
  load: () => void
}

export const useJobListingProvide = () => {
  const state = ref<State>({ status: 'init' })

  const isLoading = computed(() => state.value.status === 'loading')
  const isEmpty = computed(() => state.value.status === 'empty')

  const loadJobs = async () => {
    if (state.value.status === 'loading') {
      console.warn('still loading, skipping')
      return
    }
    state.value = { status: 'loading' }

    try {
      // TODO remove artificial network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      Math.random() > 0.5
        ? (state.value = {
            status: 'success',
            data: {
              jobs: [
                {
                  name: 'job 1'
                }
              ]
            }
          })
        : (state.value = {
            status: 'empty'
          })
    } catch (error) {
      state.value = { status: 'error', error: error as string }
    }
  }

  provide<Context>(JobListingSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    isEmpty: readonly(isEmpty),
    load: loadJobs
  })
}

export const useJobListingInject = () => {
  const jobListingContext = inject<Context>(JobListingSymbol)

  if (!jobListingContext) {
    throw new Error(`no provider found for JobListingSymbol useJobListingInject`)
  }

  return jobListingContext
}
