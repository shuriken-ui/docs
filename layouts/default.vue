<script setup lang="ts">
const appConfig = useAppConfig()
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

// Fetch tabs
const { data } = await useAsyncData('home', () =>
  queryContent()
    .where({ 'tabs.title': { $exists: true } })
    .only(['tabs', '_path'])
    .find(),
)

// Handle UI
const isSidebarOpenMobile = ref(false)
const isTocOpenMobile = ref(false)

const onOverlayClick = () => {
  isSidebarOpenMobile.value = false
  isTocOpenMobile.value = false
}

// Handle active framework
const activeFramework = ref('Nuxt')
</script>

<template>
  <div class="flex min-h-screen items-stretch bg-white dark:bg-muted-900">
    <!--Sidebar navigation-->
    <aside
      class="fixed start-0 top-0 h-full min-h-screen w-64 border-e border-muted-200 bg-muted-50 transition-transform duration-300 ease-in-out dark:border-muted-800 dark:bg-muted-950 ltablet:w-64"
      :class="[isSidebarOpenMobile ? 'z-10 translate-x-0' : '-translate-x-full lg:translate-x-0 ltablet:translate-x-0']"
    >
      <div class="flex h-14 items-center px-6">
        <NuxtLink to="/" class="text-muted-600 transition-colors duration-300 hover:text-primary-600 dark:text-muted-100 dark:hover:text-primary-500">
          <LogoText class="h-8" />
        </NuxtLink>
        <BaseButtonIcon
          size="sm"
          rounded="md"
          class="ms-auto lg:hidden ltablet:hidden"
          @click="isSidebarOpenMobile = !isSidebarOpenMobile"
        >
          <Icon name="lucide:x" class="h-4 w-4" />
        </BaseButtonIcon>
      </div>
      <div class="nui-slimscroll h-[calc(100%_-_3.5rem)] space-y-2 overflow-y-auto p-6">
        <!--Navigation links-->
        <template v-for="item in links" :key="item._id">
          <div v-if="item?.children" class="pt-3">
            <div
              role="button"
              class="mb-3 flex items-center gap-3 px-3"
              :class="route.path.includes('reference') ? '' : 'pointer-events-none'"
              @click="activeFramework === item.title ? activeFramework = '' : activeFramework = item.title"
            >
              <Icon
                v-if="item.title === 'Nuxt'"
                name="simple-icons:nuxtdotjs"
                class="h-5 w-5 text-emerald-500"
              />
              <Icon
                v-else-if="item.title === 'React'"
                name="akar-icons:react-fill"
                class="h-5 w-5 text-sky-500"
              />
              <Icon
                v-else-if="item.title === 'Tailwind'"
                name="simple-icons:tailwindcss"
                class="h-5 w-5 text-sky-500"
              />
              <BaseHeading
                as="h5"
                size="xs"
                weight="medium"
                class="uppercase text-muted-400 dark:text-muted-500"
              >
                {{ item.title }}
              </BaseHeading>
              <div v-if="route.path.includes('reference')" class="-me-2 ms-auto flex h-6 w-4 items-center justify-center">
                <Icon
                  name="lucide:chevron-down"
                  class="h-4 w-4 text-muted-400 transition-transform duration-300"
                  :class="activeFramework === item.title ? 'rotate-180' : ''"
                />
              </div>
            </div>
            <ul v-if="route.path.includes('reference')" class="space-y-1">
              <template v-if="activeFramework === item.title">
                <li
                  v-for="child in item?.children"
                  :key="child._path"
                  :class="child.children ? 'ps-2' : ''"
                >
                  <NuxtLink
                    :to="child._path"
                    exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
                    class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                    :class="child.children ? '!text-primary-500 !font-medium text-xs mt-3 uppercase pointer-events-none' : ''"
                  >
                    <Icon
                      v-if="child.icon"
                      :name="child.icon"
                      class="h-5 w-5"
                    />
                    <span>{{ child.title || child._path }}</span>
                  </NuxtLink>
                  <ul class="space-y-1 ps-3">
                    <li v-for="subchild in child?.children" :key="subchild._path">
                      <NuxtLink
                        :to="subchild._path"
                        exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
                        class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-[0.8rem] text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                      >
                        <Icon
                          v-if="subchild.icon"
                          :name="subchild.icon"
                          class="h-5 w-5"
                        />
                        <span>{{ subchild.title || subchild._path }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </template>
            </ul>
            <ul v-else class="space-y-1">
              <li
                v-for="child in item?.children"
                :key="child._path"
                :class="child.children ? 'ps-2' : ''"
              >
                <NuxtLink
                  :to="child._path"
                  exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
                  class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                  :class="child.children ? '!text-primary-500 text-xs mt-3 uppercase pointer-events-none' : ''"
                >
                  <Icon
                    v-if="child.icon"
                    :name="child.icon"
                    class="h-5 w-5"
                  />
                  <span>{{ child.title || child._path }}</span>
                </NuxtLink>

                <ul class="space-y-1 ps-3">
                  <li v-for="subchild in child?.children" :key="subchild._path">
                    <NuxtLink
                      :to="subchild._path"
                      exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
                      class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-[0.8rem] text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                    >
                      <Icon
                        v-if="subchild.icon"
                        :name="subchild.icon"
                        class="h-5 w-5"
                      />
                      <span>{{ subchild.title || subchild._path }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <NuxtLink
            v-else
            :to="item._path"
            exact-active-class="!font-medium !bg-muted-200 dark:!bg-muted-900 !text-muted-800 dark:!text-muted-100"
            class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
          >
            <Icon
              v-if="item.icon"
              :name="item.icon"
              class="h-5 w-5"
            />
            <span>{{ item.title || item._path }}</span>
          </NuxtLink>
        </template>
      </div>
    </aside>
    <!--Main content-->
    <main class="w-full lg:me-72 lg:ms-64 lg:w-[calc(100%_-_34rem)] ltablet:ms-64 ltablet:w-[calc(100%_-_16rem)]">
      <div class="relative w-full">
        <div class="fixed start-0 top-0 z-[5] w-full border-b border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900 lg:static ltablet:static">
          <div class="mx-auto max-w-3xl">
            <div class="flex h-14 items-center gap-8 px-6 md:gap-10">
              <BaseButtonIcon
                size="sm"
                rounded="md"
                class="lg:hidden ltablet:hidden"
                @click="isSidebarOpenMobile = !isSidebarOpenMobile"
              >
                <Icon name="lucide:menu" class="h-4 w-4" />
              </BaseButtonIcon>
              <NuxtLink
                v-for="tab in data"
                :key="tab._path"
                :to="tab._path"
                class="flex h-14 items-center gap-2 border-b-2 text-sm"
                :class="[
                  route.path.startsWith(tab._path) ? ' border-muted-800 font-medium text-muted-800 opacity-100 dark:border-muted-100 dark:text-muted-100' : 'border-transparent opacity-50 grayscale',
                ]"
              >
                <Icon :name="tab.tabs.icon" class="h-5 w-5" />
                <span class="hidden text-sm font-medium text-muted-800 dark:text-muted-100 md:inline">{{ tab.tabs.title }}</span>
              </NuxtLink>
              <div class="ms-auto flex items-center gap-2">
                <BaseButtonIcon
                  size="sm"
                  rounded="lg"
                  class="md:hidden"
                >
                  <Icon name="lucide:search" class="h-4 w-4" />
                </BaseButtonIcon>
                <BaseInput
                  icon="lucide:search"
                  size="sm"
                  rounded="md"
                  readonly
                  :classes="{
                    wrapper: 'w-28 cursor-pointer md:block hidden',
                    input: 'cursor-pointer',
                  }"
                >
                  <template #action>
                    <div class="absolute end-1 top-1 flex items-center justify-end gap-1">
                      <BaseKbd
                        size="xs"
                        color="default"
                        rounded="md"
                      >
                        Ctrl
                      </BaseKbd>
                      <span>+</span>
                      <BaseKbd
                        size="xs"
                        color="default"
                        rounded="md"
                      >
                        <span class="px-1">K</span>
                      </BaseKbd>
                    </div>
                  </template>
                </BaseInput>
                <BaseButtonIcon
                  size="sm"
                  rounded="md"
                  class="lg:hidden"
                  @click="isTocOpenMobile = !isTocOpenMobile"
                >
                  <Icon name="lucide:folder" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="mx-auto max-w-3xl px-6 pb-12 pt-20 lg:pt-6 ltablet:pt-6">
            <slot />
          </div>
        </div>
        <div class="pt-16">
          <div class="mx-auto max-w-3xl px-6">
            <Nav />
          </div>
        </div>
      </div>
    </main>
    <!--Table of contents-->
    <div
      class="fixed end-0 top-0 h-full min-h-screen w-72 bg-white transition-transform duration-300 ease-in-out dark:bg-muted-900"
      :class="[isTocOpenMobile ? 'z-[10] translate-x-0' : 'translate-x-full lg:translate-x-0']"
    >
      <div class="flex h-14 items-center gap-3 border-b px-6" :class="[y === 0 ? 'border-muted-200 dark:border-muted-800' : 'border-transparent dark:border-transparent']">
        <BaseButtonIcon
          size="sm"
          rounded="md"
          class="lg:hidden"
          @click="isTocOpenMobile = !isTocOpenMobile"
        >
          <Icon name="lucide:arrow-right" class="h-4 w-4" />
        </BaseButtonIcon>
        <NuxtLink
          to="https://github.com/shuriken-ui"
          target="_blank"
          rel="noopener"
          class="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800"
        >
          <Icon name="fa6-brands:github" class="h-5 w-5" />
        </NuxtLink>
        <NuxtLink
          :to="`https://twitter.com/${appConfig.twitter}`"
          target="_blank"
          rel="noopener"
          class="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800"
        >
          <Icon name="ri:twitter-x-fill" class="h-4 w-4" />
        </NuxtLink>
        <div class="ms-auto scale-90">
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
      class="fixed start-0 top-0 z-[9] h-full w-full bg-muted-950 transition-opacity duration-300"
      :class="isSidebarOpenMobile || isTocOpenMobile ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="onOverlayClick"
    />
  </div>
</template>
