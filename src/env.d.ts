declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}

interface ImportMetaEnv {
  readonly VITE_I18N_LOCALE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
