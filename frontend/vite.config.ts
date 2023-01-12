import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()],
  server: {
    port: 3000,
    hmr:{
      host: 'localhost',
      port: 3000,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
