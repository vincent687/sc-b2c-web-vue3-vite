import { computed, inject, provide, readonly, Ref, ref } from 'vue'
import { getPosts } from '../api/post'

export type Data<T> = {
  pubkey: string
  info: T
}
export type Post = {
  image: string
  title: string
  description: string
  remarks: string
  date: string
}

export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (connection: string, pubkey: string) => void
}
export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Data<object> }

const PostSymbol = Symbol()

export const usePostProvide = () => {
  const state = ref<State>({ status: 'init' })

  const isLoading = computed(() => state.value.status === 'loading')

  const loadPosts = async (connection: string, pubkey: string) => {
    if (state.value.status === 'loading') {
      console.warn('still loading, skipping')
      return
    }

    state.value = { status: 'loading' }

    try {
      // TODO remove artificial network latency
      await new Promise((resolve) => setTimeout(resolve, 500))
      let info = {}

      await getPosts({}).then((res) => {
        info = res.data
      })

      state.value =
        info !== null
          ? { status: 'success', data: { info, pubkey } }
          : { status: 'error', error: 'unable to load account' }
    } catch (error) {
      state.value = { status: 'error', error: error as string }
    }
  }

  provide<Context>(PostSymbol, {
    state: readonly(state),
    isLoading: readonly(isLoading),
    load: loadPosts,
  })
}

export const usePostInject = () => {
  const postContext = inject<Context>(PostSymbol)

  if (!postContext) {
    throw new Error(`no provider found for AccountSymbol useAccountProvide`)
  }

  return postContext
}
