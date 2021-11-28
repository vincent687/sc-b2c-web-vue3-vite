import { getArrayFields, getFields, prepass, selectFields } from 'gqty'
import { computed, inject, provide, readonly, ref, Ref, triggerRef } from 'vue'
import { query, resolved, Job as GqlJob, PaginatedJobs, Maybe, inlineResolved } from '../gqty'

export type Job = GqlJob

export type Data = {
  jobs: Job[]
  jobs$: GqlJob[] //Maybe<PaginatedJobs>
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
      await new Promise((resolve) => setTimeout(resolve, 500))

      const q = query.jobs!({ params: { skip: 0, pageSize: 20 } })
      // const p = prepass(q, 'data.title', 'data.description')
      const p = getFields(q, 'data', 'total')
      const p2 = getArrayFields(p?.data, 'title', 'description')
      const r = await resolved(() => p2, { noCache: true })
      // const r = await s

      await new Promise((resolve) => setTimeout(resolve, 1000))
      const jobs = (r ?? []).map<Job>((d) => ({
        title: d.title!,
        uuid: d.id!,
        thumbnailImageURL: ''
      }))
      state.value = {
        status: 'success',
        data: { jobs, jobs$: [] }
      }
      // await new Promise((resolve) => setTimeout(resolve, 1000))

      // const q = query.job!({ id: 'ad042069-d5d8-483a-8592-67bbf7feaada' })
      // // const p = q //prepass(q, 'data.title', 'data.description')
      // const p = getFields(q, 'title', 'description')
      // const s = await resolved(() => p, { noCache: true })
      // const r = await s

      // const jobs = [
      //   {
      //     title: r?.title!,
      //     uuid: r?.id!,
      //     thumbnailImageURL: ''
      //   }
      // ]

      const qq = query.jobs!({ params: { skip: 0, pageSize: 20 } })
      const pp = getFields(qq, 'data', 'total')
      const ppr = await resolved(() => pp, { noCache: true, refetch: true })
      const bb = getArrayFields(ppr?.data, 'title', 'description')
      const bbr = await resolved(() => bb, { noCache: true })
      console.debug('bbrbbr', bbr, bbr?.length)

      state.value = {
        status: 'success',
        data: { jobs, jobs$: bbr! }
      }

      // Math.random() > 0.3
      //   ? (state.value = {
      //       status: 'success',
      //       data: {
      //         jobs: fakeJobs()
      //       }
      //     })
      //   : (state.value = {
      //       status: 'empty'
      //     })
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
      title: 'job 1',
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
      title: 'job 2',
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
