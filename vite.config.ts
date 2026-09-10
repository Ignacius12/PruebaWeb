import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://Ignacius12.github.io/PruebaWeb/
export default defineConfig({
  base: '/PruebaWeb/',
  plugins: [react(), tailwindcss()],
})
