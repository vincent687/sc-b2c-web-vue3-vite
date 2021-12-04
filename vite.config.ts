import path from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
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
  plugins: [vue()],
})
