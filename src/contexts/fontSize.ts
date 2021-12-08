import { inject, provide, readonly, Ref, ref } from 'vue'

const FontSizeSymbol = Symbol()

export enum FontSize {
  header = '2.5em',
  normal = '0.875em',
}

export type Context = {
  currentFontSize: Ref<string>
  change: (fontSize: string) => void
}

export const useFontSizeProvide = () => {
  const state = ref<string>('0.875em')

  const changeFontSize = (fontSize: string) => {
    state.value = fontSize
  }

  provide<Context>(FontSizeSymbol, {
    currentFontSize: readonly(state),
    change: changeFontSize,
  })
}

export const useFontSizeInject = () => {
  const fontSizeContext = inject<Context>(FontSizeSymbol)

  if (!fontSizeContext) {
    throw new Error(`no provider found for fontSizeSymbol usefontSizeProvide`)
  }

  return fontSizeContext
}
