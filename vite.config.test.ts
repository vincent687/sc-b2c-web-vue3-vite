import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import viteTestPlugin from 'vite-plugin-test'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    viteTestPlugin({
      watch: true,
    }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: false,
      injectCode: `
      import { setupProdMockServer } from './mockProdServer';
      setupProdMockServer();
    `,
      logger: false,
      supportTs: false,
    }),
  ],
})
