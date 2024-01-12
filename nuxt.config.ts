import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-component-meta',
  ],
  css: [
    '~/assets/css/root.css',
    '~/assets/css/colors.css',
    '~/assets/css/gridlines.css',
  ],
  fontMetrics: {
    fonts: ['Inter'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: [400, 500, 600, 700],
    },
  },

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
