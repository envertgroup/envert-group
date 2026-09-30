import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        minify: mode === 'production' ? {
          compress: {
            dropConsole: true,
            dropDebugger: true,
          },
          mangle: true,
        } : false,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('\\react\\')) {
              return 'vendor-react';
            }
            return 'vendor-other';
          }
        },
      },
    },
  },
}))
