<script setup lang="ts">
const route = useRoute()
const { x, y } = useWindowScroll()

//Fetch tabs
const { data } = await useAsyncData('changelog', () =>
  queryContent()
    .where({ 'section.title': { $exists: true } })
    .only(['section', '_path'])
    .find()
)
</script>

<template>
  <div>
    <Navbar />
    <div
      class="fixed z-[39] top-16 start-0 w-full px-4 border-b transition-all duration-300"
      :class="[y > 60 ? 'bg-white/95 dark:bg-muted-950 !border-muted-200 dark:!border-muted-800' : 'border-transparent']"
    >
      <div class="w-full max-w-7xl mx-auto">
        <div class="flex items-center gap-8">
          <NuxtLink
            v-for="tab in data"
            :key="tab._path"
            :to="tab._path"
            class="h-14 flex items-center gap-2 border-b-2 text-sm"
            :class="[
              route.path.startsWith(tab._path) ? ' font-medium border-muted-800 dark:border-muted-100 text-muted-800 dark:text-muted-100 opacity-100' : 'border-transparent grayscale opacity-50',
            ]"
          >
            <Icon :name="tab.section.icon" class="w-5 h-5" />
            <span class="hidden md:inline text-sm font-medium text-muted-800 dark:text-muted-100">{{ tab.section.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative px-4 pt-32 pb-16 min-h-screen">
      <div class="w-full max-w-7xl mx-auto">
        <!--pre>{{ data }}</pre-->
        <slot />
        <ThemeSwitcher />
      </div>
    </div>
    <SiteFooter />
  </div>
</template>
