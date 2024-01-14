<script setup lang="ts">
const route = useRoute()
const { x, y } = useWindowScroll()

// Fetch tabs
const { data } = await useAsyncData('changelog', () =>
  queryContent()
    .where({ 'section.title': { $exists: true } })
    .only(['section', '_path'])
    .find(),
)
</script>

<template>
  <div>
    <Navbar />
    <div
      class="fixed start-0 top-16 z-[39] w-full border-b px-4 transition-all duration-300"
      :class="[y > 60 ? '!border-muted-200 bg-white/95 dark:!border-muted-800 dark:bg-muted-950' : 'border-transparent']"
    >
      <div class="mx-auto w-full max-w-7xl">
        <div class="flex items-center gap-8">
          <NuxtLink
            v-for="tab in data"
            :key="tab._path"
            :to="tab._path"
            class="flex h-14 items-center gap-2 border-b-2 text-sm"
            :class="[
              route.path.startsWith(tab._path) ? ' border-muted-800 font-medium text-muted-800 opacity-100 dark:border-muted-100 dark:text-muted-100' : 'border-transparent opacity-50 grayscale',
            ]"
          >
            <Icon :name="tab.section.icon" class="h-5 w-5" />
            <span class="hidden text-sm font-medium text-muted-800 dark:text-muted-100 md:inline">{{ tab.section.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative min-h-screen px-4 pb-16 pt-32">
      <div class="mx-auto w-full max-w-7xl">
        <!--pre>{{ data }}</pre-->
        <slot />
        <!-- <ThemeSwitcher /> -->
      </div>
    </div>
    <SiteFooter />
  </div>
</template>
