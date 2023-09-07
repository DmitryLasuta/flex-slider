import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import sass from 'sass'
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
      postcss: {
        plugins: [autoprefixer],
      },
    },
  },

  plugins: [htmlMinifier()],
})
