import path from 'path'
import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      }
    ]
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: false,
      injectCode: `
      import { setupProdMockServer } from './mockProdServer';
      setupProdMockServer();
    `,
      logger: false,
      supportTs: false
    })
  ]
})
