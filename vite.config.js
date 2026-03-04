import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('react-icons')) return 'icons'
          if (id.includes('@tsparticles') || id.includes('tsparticles')) return 'particles'
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('react-animated-cursor')) return 'cursor'
          if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor'

          return 'vendor'
        },
      },
    },
  },
})
