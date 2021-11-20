import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '/@/': path.resolve('src'),
    '/@components/': path.resolve('./src/components')
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
