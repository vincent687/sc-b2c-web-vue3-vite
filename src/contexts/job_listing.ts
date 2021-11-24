import { computed, inject, provide, readonly, ref, Ref } from 'vue'

export type Job = {
  uuid: string
  name: string
  thumbnailImageURL: string
  tags: { id: number; name: string; color: string }[]
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

      Math.random() > 0.3
        ? (state.value = {
            status: 'success',
            data: {
              jobs: fakeJobs()
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

function fakeJobs(): Job[] {
  return [
    {
      uuid: '8080d350-60a7-44bd-a834-d35cef95ef53',
      name: 'job 1',
      thumbnailImageURL:
        'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
      tags: [
        {
          id: 1,
          name: 'No Poverty',
          color: 'red'
        },
        {
          id: 2,
          name: 'Quality Education',
          color: 'red'
        },
        {
          id: 3,
          name: 'Decent Work',
          color: 'red'
        },
        {
          id: 4,
          name: '導師/教師',
          color: 'grey'
        },
        {
          id: 5,
          name: '管理工作',
          color: 'grey'
        }
      ]
    },
    {
      uuid: 'ea4ec1fb-3896-4034-863d-e179b0911f51',
      name: 'job 2',
      thumbnailImageURL:
        'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
      tags: [
        {
          id: 1,
          name: 'No Poverty',
          color: 'red'
        },
        {
          id: 2,
          name: 'Quality Education',
          color: 'red'
        },
        {
          id: 3,
          name: 'Decent Work',
          color: 'red'
        },
        {
          id: 4,
          name: '導師/教師',
          color: 'grey'
        },
        {
          id: 5,
          name: '管理工作',
          color: 'grey'
        }
      ]
    }
  ]
}
