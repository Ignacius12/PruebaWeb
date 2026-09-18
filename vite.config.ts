import { copyFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const rootDir = dirname(fileURLToPath(import.meta.url))

function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const indexHtml = resolve(rootDir, 'dist/index.html')
      const notFoundHtml = resolve(rootDir, 'dist/404.html')
      copyFileSync(indexHtml, notFoundHtml)
    },
  }
}

// GitHub Pages: https://Ignacius12.github.io/PruebaWeb/
export default defineConfig({
  base: '/PruebaWeb/',
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
})
