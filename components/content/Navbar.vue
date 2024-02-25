<script setup lang="ts">
import packagejson from '~/package.json'

const { data } = await useFetch('/api/versions')

const mobileOpen = ref(false)
const { x, y } = useWindowScroll()
</script>

<template>
  <header
    class="fixed start-0 top-0 z-40 w-full border-b px-4 transition-all duration-300 md:px-6"
    :class="[
      y > 60 ? '!border-muted-200 bg-white/95 dark:!border-muted-800 dark:bg-muted-950' : 'border-transparent',
      mobileOpen ? '!border-muted-200 !bg-white/95 dark:!border-muted-800 dark:!bg-muted-950' : 'border-transparent',
    ]"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex h-16 items-center justify-between">
        <div class="w-1/4 shrink-0">
          <NuxtLink
            to="/"
            title=""
            class=""
          >
            <LogoText
              class="h-8 w-auto transition-colors duration-300"
              :class="[y > 60 ? 'text-primary-600 dark:text-primary-400' : 'text-muted-400 hover:!text-primary-600 dark:text-muted-500', mobileOpen ? '!text-primary-600 dark:!text-primary-400' : '']"
            />
          </NuxtLink>
        </div>
        <!--Desktop menu-->
        <div class="hidden grow lg:flex lg:items-center lg:justify-center lg:space-x-4">
          <NuxtLink
            to="/docs/guide"
            title=""
            class="nui-focus inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Guide
          </NuxtLink>
          <NuxtLink
            to="/docs/reference"
            title=""
            class="nui-focus inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Components
          </NuxtLink>
          <NuxtLink
            to="/playground"
            title=""
            exact-active-class="!text-muted-900 dark:!text-muted-100 !bg-muted-100 dark:!bg-muted-900"
            class="nui-focus inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Playground
          </NuxtLink>
          <NuxtLink
            to="/blog"
            title=""
            active-class="!text-muted-900 dark:!text-muted-100 !bg-muted-100 dark:!bg-muted-900"
            class="nui-focus inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Blog
          </NuxtLink>
        </div>
        <div class="ml-auto hidden w-1/4 justify-end gap-2 sm:flex lg:ml-0">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="end"
            size="md"
          >
            <template #button>
              <div
                role="button"
                tabindex="0"
                class="nui-focus flex h-8 items-center gap-1 rounded-full px-3 hover:bg-muted-100 dark:hover:bg-muted-900"
              >
                <Icon name="lucide:git-commit" class="h-5 w-5 shrink-0" />
                <BaseText
                  size="xs"
                  weight="medium"
                  class=""
                >
                  Versions
                </BaseText>
              </div>
            </template>
            <BaseDropdownItem
              v-for="project in data"
              :key="project.packageName"
              :to="project.repo"
              :title="project.packageName"
              :text="project.version"
              rounded="sm"
            >
              <template #start>
                <Icon :name="project.icon" class="h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseButtonIcon
            size="sm"
            rounded="lg"
            class="hidden lg:flex"
            @click="
              () => {
                const isOpen = useState('switcher-open', () => false)
                isOpen.value = true
              }
            "
          >
            <Icon name="mingcute:drop-fill" class="h-4 w-4 text-primary-500" />
          </BaseButtonIcon>
          <BaseButtonIcon
            size="sm"
            rounded="lg"
            class="hidden lg:flex"
          >
            <Icon name="lucide:search" class="h-4 w-4" />
          </BaseButtonIcon>
          <BaseButtonIcon
            to="https://github.com/shuriken-ui"
            target="_blank"
            rel="noopener"
            size="sm"
            rounded="lg"
            class="hidden lg:flex"
          >
            <Icon name="fa6-brands:github" class="h-4 w-4" />
          </BaseButtonIcon>
          <div class="relative -top-0.5 hidden scale-90 lg:flex">
            <BaseThemeToggle disable-transitions />
          </div>
        </div>
        <!--Mobile menu button-->
        <div class="ms-4 flex lg:hidden">
          <button
            class="group nui-mask nui-mask-blob relative flex h-10 w-10 items-center justify-center"
            :class="[mobileOpen ? 'bg-muted-100' : '', mobileOpen && y > 60 ? 'dark:bg-muted-900' : 'dark:bg-muted-950']"
            @click="mobileOpen = !mobileOpen"
          >
            <div class="relative flex h-[24px] w-[24px] items-center justify-center overflow-hidden transition-all duration-200">
              <div class="flex h-4 w-[24px] origin-center flex-col justify-between overflow-hidden transition-all duration-300">
                <div class="h-[2px] w-7 origin-left bg-muted-500 transition-all duration-300" :class="mobileOpen ? 'translate-x-10' : ''" />
                <div class="h-[2px] w-7 rounded bg-muted-500 transition-all delay-75 duration-300" :class="mobileOpen ? 'translate-x-10' : ''" />
                <div class="h-[2px] w-7 origin-left bg-muted-500 transition-all delay-150 duration-300" :class="mobileOpen ? 'translate-x-10' : ''" />

                <div class="absolute top-3 flex scale-105 items-center justify-between transition-all duration-500" :class="[mobileOpen ? 'w-12 translate-x-1' : 'w-0 -translate-x-10']">
                  <div class="absolute h-[2px] w-4 bg-muted-500 transition-all delay-300 duration-500" :class="mobileOpen ? 'rotate-45' : 'rotate-0'" />
                  <div class="absolute h-[2px] w-4 bg-muted-500 transition-all delay-300 duration-500" :class="mobileOpen ? '-rotate-45' : '-rotate-0'" />
                </div>
              </div>
            </div>
          </button>
        </div>
        <!--Mobile menu-->
        <div
          class="fixed start-0 top-16 z-20 block w-full border-y border-muted-200 bg-white shadow-xl shadow-muted-300/30 transition-all duration-300 dark:bg-muted-950 dark:shadow-muted-800/20 lg:hidden"
          :class="[mobileOpen ? 'h-[490px] opacity-100' : 'h-0 opacity-0']"
        >
          <div class="mx-auto flex w-full max-w-[240px] flex-col py-6 text-center transition-opacity duration-300" :class="[mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0']">
            <div class="flex flex-col gap-2">
              <NuxtLink
                to="/docs/guide"
                class="focus:ring-ring-300 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-base font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-muted-400 dark:hover:text-muted-100"
              >
                Guide
              </NuxtLink>
              <NuxtLink
                to="/docs/reference"
                class="focus:ring-ring-300 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-base font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-muted-400 dark:hover:text-muted-100"
              >
                Components
              </NuxtLink>
              <NuxtLink
                to="/playground"
                class="focus:ring-ring-300 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-base font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-muted-400 dark:hover:text-muted-100"
              >
                Playground
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="focus:ring-ring-300 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-base font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-muted-400 dark:hover:text-muted-100"
              >
                Blog
              </NuxtLink>
            </div>
            <hr class="my-6 border-t border-muted-200 dark:border-muted-800">
            <div class="flex flex-col gap-2">
              <button
                type="button"
                class="focus:ring-ring-300 inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-4 py-1.5 text-base font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-muted-400 dark:hover:text-muted-100"
              >
                <Icon name="mingcute:drop-fill" class="h-5 w-5 text-primary-500" />
                <span>Customize</span>
              </button>
              <NuxtLink
                to="https://github.com/shuriken-ui"
                target="_blank"
                rel="noopener"
                class="focus:ring-ring-300 inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-4 py-1.5 text-base font-medium text-muted-600 transition-all duration-200 hover:bg-muted-100 hover:text-muted-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-muted-400 dark:hover:text-muted-100"
              >
                <Icon name="fa6-brands:github" class="h-5 w-5" />
                <span>Github</span>
              </NuxtLink>
              <div class="flex items-center justify-center py-4">
                <BaseThemeSwitch />
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-md px-8 transition-opacity duration-300" :class="[mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0']">
            <BaseButton
              rounded="lg"
              size="lg"
              class="w-full"
            >
              <Icon name="lucide:search" class="h-4 w-4" />
              <span>Search</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
