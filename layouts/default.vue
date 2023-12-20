<script setup lang="ts">
const route = useRoute()

const pathFilter = computed(() => {
  return route.path.split('/').slice(0, 3).join('/')
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(queryContent(pathFilter.value)), {
  watch: [pathFilter],
})

const links = computed(() => {
  return navigation.value?.[0].children?.[0].children
})

const { x, y } = useWindowScroll()
console.log(navigation.value)

//Fetch tabs
const { data } = await useAsyncData('home', () =>
  queryContent()
    .where({ 'tabs.title': { $exists: true } })
    .only(['tabs', '_path'])
    .find()
)

//Handle UI
const isSidebarOpenMobile = ref(false)
</script>

<template>
  <div class="flex items-stretch min-h-screen bg-white dark:bg-muted-900">
    <!--Sidebar navigation-->
    <aside class="fixed top-0 start-0 h-full min-h-screen w-72 bg-muted-50 dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800">
      <div class="flex items-center px-6 h-14">
        <NuxtLink to="/docs" class="text-muted-600 dark:text-muted-100 hover:text-primary-800 dark:hover:text-primary-500 transition-colors duration-300">
          <LogoText class="h-8" />
        </NuxtLink>
      </div>
      <div class="p-6 space-y-2">
        <!--Navigation links-->
        <template v-for="item in links" :key="item._id">
          <div v-if="item.children" class="py-3">
            <div class="mb-3 px-3">
              <BaseHeading as="h5" size="xs" weight="medium" class="uppercase text-muted-400 dark:text-muted-500">
                {{ item.title }}
              </BaseHeading>
            </div>
            <ul class="space-y-1">
              <li v-for="child in item.children">
                <NuxtLink
                  :to="child._path"
                  exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
                  class="h-8 flex gap-4 items-center px-3 font-sans text-sm rounded-full transition-colors duration-300 hover:bg-muted-200/70 dark:hover:bg-muted-800 text-muted-700 hover:text-muted-800 dark:text-muted-400 dark:hover:text-muted-100"
                >
                  <Icon v-if="child.icon" :name="child.icon" class="w-5 h-5" />
                  <span>{{ child.title || child._path }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <NuxtLink
            v-else
            :to="item._path"
            exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
            class="h-8 flex gap-4 items-center px-3 font-sans text-sm rounded-full transition-colors duration-300 hover:bg-muted-200/70 dark:hover:bg-muted-800 text-muted-700 hover:text-muted-800 dark:text-muted-400 dark:hover:text-muted-100"
          >
            <Icon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
            <span>{{ item.title || item._path }}</span>
          </NuxtLink>
        </template>
      </div>
    </aside>
    <!--Main content-->
    <main class="w-full lg:w-[calc(100%_-_38rem)] lg:ms-72 lg:me-80">
      <!-- <pre>
        {{ links }}
      </pre> -->
      <div class="relative w-full">
        <div class="border-b border-muted-200 dark:border-muted-800">
          <div class="max-w-3xl mx-auto">
            <div class="flex items-center h-14 gap-10 px-6">
              <NuxtLink
                v-for="tab in data"
                :key="tab._path"
                :to="tab._path"
                class="h-14 flex items-center gap-2 border-b-2 text-sm"
                :class="[
                  route.path.startsWith(tab._path) ? ' font-medium border-muted-800 dark:border-muted-100 text-muted-800 dark:text-muted-100 opacity-100' : 'border-transparent grayscale opacity-50',
                ]"
              >
                <Icon :name="tab.tabs.icon" class="w-5 h-5" />
                <span class="text-sm font-medium text-muted-800 dark:text-muted-100">{{ tab.tabs.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="max-w-3xl mx-auto px-6 pt-6 pb-12">
            <slot />
          </div>
        </div>
        <div class="pt-16">
          <div class="max-w-3xl mx-auto px-6">
            <Nav />
          </div>
        </div>
      </div>
    </main>
    <!--Table of contents-->
    <div class="fixed top-0 end-0 h-full w-80 bg-white dark:bg-muted-900 min-h-screen">
      <div class="flex items-center gap-3 px-6 h-14 border-b" :class="[y === 0 ? 'border-muted-200 dark:border-muted-800' : 'border-transparent dark:border-transparent']">
        <NuxtLink to="/" class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
          <Icon name="fa6-brands:github" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink to="/" class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
          <Icon name="ri:twitter-x-fill" class="w-4 h-4" />
        </NuxtLink>
        <div class="ms-auto">
          <BaseThemeSwitch />
        </div>
      </div>
      <div class="p-6">
        <div class="pt-6">
          <Toc />
        </div>
      </div>
    </div>
  </div>
</template>
