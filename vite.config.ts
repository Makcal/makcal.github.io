import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      svelte(),
  ],
  publicDir: 'static',
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        comic: 'src/comic.html',
      },
    }
  }
})
