import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-component-meta',
  ],

  routeRules: {
    '/**': {
      isr: 60,
    },
  },

  componentMeta: {
    metaSources: ['@shuriken-ui/nuxt/component-meta'],
    exclude: [
      // Disable parsing components in the project, only use static ones.
      () => true,
    ],
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
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  css: ['~/assets/css/styles.css'],
  fontMetrics: {
    fonts: ['Inter']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  experimental: {
    viewTransition: true,
    writeEarlyHints: true,
    defaults: {
      useAsyncData: {
        deep: false,
      },
    },
  },
  devtools: { enabled: true },
})
