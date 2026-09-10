import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Repo name used as GitHub Pages base path: https://USER.github.io/casa-oliva/
export default defineConfig({
  base: '/casa-oliva/',
  plugins: [react(), tailwindcss()],
})
