import path from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import viteTestPlugin from 'vite-plugin-test'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, './src/contexts'),
      },
      {
        find: '@lang',
        replacement: path.resolve(__dirname, './lang'),
      },
    ],
  },
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
