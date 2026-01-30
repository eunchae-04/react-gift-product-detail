import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-gift-product-detail/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // ← 실제 API 서버 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // 경로 유지
      },
    },
  },
});
