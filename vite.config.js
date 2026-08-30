import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The app's base path. For local dev it is /javapath/javapathapp/; for the
// GitHub Pages deployment of this repo it becomes /javapath-react/javapathapp/.
// Overridable via VITE_BASE env var (see .github/workflows/deploy.yml).
export default defineConfig({
  base: process.env.VITE_BASE || '/javapath/javapathapp/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
})