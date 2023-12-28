// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: true,
      toc: { depth: 4, searchDepth: 4 },
      // tags: {
      //   code: 'ProseCode'
      // }
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
  // hooks: {
  //   'components:dirs': (dirs) => {
  //     console.log(dirs)
  //     const base = dirs.find((dir) => typeof dir ===  'object' && dir.path.endsWith('@shuriken-ui/nuxt/components/base'))
  //     const form = dirs.find((dir) => typeof dir ===  'object' && dir.path.endsWith('@shuriken-ui/nuxt/components/form'))
  //     if (typeof base === 'object') {
  //       base.global = true
  //     }
  //     if (typeof form === 'object') {
  //       form.global = true
  //     }
  //   },
  // },
})
