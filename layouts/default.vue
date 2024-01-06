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
const isTocOpenMobile = ref(false)

const onOverlayClick = () => {
  isSidebarOpenMobile.value = false
  isTocOpenMobile.value = false
}
</script>

<template>
  <div class="flex items-stretch min-h-screen bg-white dark:bg-muted-900">
    <!--Sidebar navigation-->
    <aside
      class="fixed top-0 start-0 h-full min-h-screen ltablet:w-64 w-64 bg-muted-50 dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800 transition-transform duration-300 ease-in-out"
      :class="[isSidebarOpenMobile ? 'translate-x-0 z-10' : '-translate-x-full ltablet:translate-x-0 lg:translate-x-0']"
    >
      <div class="flex items-center px-6 h-14">
        <NuxtLink to="/" class="text-muted-600 dark:text-muted-100 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
          <LogoText class="h-8" />
        </NuxtLink>
        <BaseButtonIcon size="sm" rounded="md" class="ms-auto ltablet:hidden lg:hidden" @click="isSidebarOpenMobile = !isSidebarOpenMobile">
          <Icon name="lucide:x" class="w-4 h-4" />
        </BaseButtonIcon>
      </div>
      <div class="p-6 space-y-2 h-[calc(100%_-_3.5rem)] overflow-y-auto nui-slimscroll">
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
    <main class="w-full ltablet:w-[calc(100%_-_16rem)] lg:w-[calc(100%_-_34rem)] ltablet:ms-64 lg:ms-64 lg:me-72">
      <div class="relative w-full">
        <div class="border-b border-muted-200 dark:border-muted-800">
          <div class="max-w-3xl mx-auto">
            <div class="flex items-center h-14 gap-10 px-6">
              <BaseButtonIcon size="sm" rounded="md" class="ltablet:hidden lg:hidden" @click="isSidebarOpenMobile = !isSidebarOpenMobile">
                <Icon name="lucide:menu" class="w-4 h-4" />
              </BaseButtonIcon>
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
                <span class="hidden md:inline text-sm font-medium text-muted-800 dark:text-muted-100">{{ tab.tabs.title }}</span>
              </NuxtLink>
              <BaseButtonIcon size="sm" rounded="md" class="ms-auto lg:hidden" @click="isTocOpenMobile = !isTocOpenMobile">
                <Icon name="lucide:folder" class="w-4 h-4" />
              </BaseButtonIcon>
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
    <div
      class="fixed top-0 end-0 h-full w-72 bg-white dark:bg-muted-900 min-h-screen transition-transform duration-300 ease-in-out"
      :class="[isTocOpenMobile ? 'translate-x-0 z-[2]' : 'translate-x-full lg:translate-x-0']"
    >
      <div class="flex items-center gap-3 px-6 h-14 border-b" :class="[y === 0 ? 'border-muted-200 dark:border-muted-800' : 'border-transparent dark:border-transparent']">
        <BaseButtonIcon size="sm" rounded="md" class="lg:hidden" @click="isTocOpenMobile = !isTocOpenMobile">
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </BaseButtonIcon>
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
    <!--Mobile overlay-->
    <div
      role="button"
      class="fixed z-[9] top-0 start-0 h-full w-full bg-muted-950 transition-opacity duration-300"
      :class="isSidebarOpenMobile || isTocOpenMobile ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="onOverlayClick"
    ></div>
  </div>
</template>
