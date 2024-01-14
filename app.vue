<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: '%s | Shuriken UI',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})

useSeoMeta({
  ogSiteName: 'Shuriken UI',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.twitter,
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ThemeSwitcher />
  </div>
</template>
