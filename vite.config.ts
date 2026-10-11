import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures static deployment on GitHub Pages or custom domains without path issues
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})
