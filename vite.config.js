import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base:'idgenerate',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // 允许通过 IP 地址访问
    port: 5173,       // 默认端口
  }
})
