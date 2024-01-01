import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxtjs/google-fonts', '@vueuse/nuxt', 'nuxt-component-meta'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  tailwindcss: {
    config: {
      plugins: [exposeColors],
    },
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: true,
      toc: { depth: 4, searchDepth: 4 },
    },
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },
  css: ['~/assets/css/styles.css'],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  devtools: { enabled: true },
})
