import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

  export default defineConfig({
    build: {
        target: 'esnext', //browsers can handle the latest ES features

        rollupOptions: {
            input: {
            main: resolve(__dirname, 'index.html'),
            results: resolve(__dirname, 'results/index.html'),
            },
      },
    },
  })