<script setup lang="ts">
import packagejson from '~/package.json'
const mobileOpen = ref(false)
const { x, y } = useWindowScroll()
</script>

<template>
  <header
    class="fixed z-40 top-0 start-0 w-full px-4 md:px-6 border-b transition-all duration-300"
    :class="[
      y > 60 ? 'bg-white/95 dark:bg-muted-950 !border-muted-200 dark:!border-muted-800' : 'border-transparent',
      mobileOpen ? '!bg-white/95 dark:!bg-muted-950 !border-muted-200 dark:!border-muted-800' : 'border-transparent',
    ]"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16">
        <div class="shrink-0 w-1/4">
          <NuxtLink to="/" title="" class="">
            <LogoText
              class="w-auto h-8 transition-colors duration-300"
              :class="[y > 60 ? 'text-primary-600 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500 hover:!text-primary-600', mobileOpen ? '!text-primary-600 dark:!text-primary-400' : '']"
            />
          </NuxtLink>
        </div>
        <!--Desktop menu-->
        <div class="hidden grow lg:flex lg:items-center lg:space-x-4 lg:justify-center">
          <NuxtLink
            to="/docs"
            title=""
            class="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 nui-focus"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Documentation
          </NuxtLink>
          <NuxtLink
            to="/changelog"
            title=""
            active-class="!text-muted-900 dark:!text-muted-100 !bg-muted-100 dark:!bg-muted-900"
            class="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 nui-focus"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Changelog
          </NuxtLink>
          <NuxtLink
            to="/playground"
            title=""
            class="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 nui-focus"
            :class="[y > 60 ? 'dark:hover:bg-muted-900' : 'dark:hover:bg-muted-950']"
          >
            Playground
          </NuxtLink>
        </div>
        <div class="hidden ml-auto sm:flex lg:ml-0 justify-end gap-2 w-1/4">
          <BaseDropdown variant="button" label="Dropdown" orientation="end" size="md">
            <template #button>
              <div role="button" tabindex="0" class="nui-focus h-8 px-3 flex items-center gap-1 rounded-full hover:bg-muted-100 dark:hover:bg-muted-900">
                <Icon name="lucide:git-commit" class="w-5 h-5 shrink-0" />
                <BaseText size="xs" weight="medium" class="">Versions</BaseText>
              </div>
            </template>
            <BaseDropdownItem to="#" title="@shuriken-ui/nuxt" :text="packagejson.devDependencies['@shuriken-ui/nuxt'].replace('^', '')" color="default" rounded="sm">
              <template #start>
                <Icon name="logos:nuxt-icon" class="w-5 h-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem to="#" title="@shuriken-ui/react" text="0.0.0-alpha.1" color="default" rounded="sm">
              <template #start>
                <Icon name="logos:react" class="w-5 h-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem to="#" title="@shuriken-ui/tailwind" text="2.0.0-next.12" color="default" rounded="sm">
              <template #start>
                <Icon name="logos:tailwindcss-icon" class="w-5 h-5" />
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
            <Icon name="mingcute:drop-fill" class="w-4 h-4 text-primary-500" />
          </BaseButtonIcon>
          <BaseButtonIcon size="sm" rounded="lg" class="hidden lg:flex">
            <Icon name="lucide:search" class="w-4 h-4" />
          </BaseButtonIcon>
          <BaseButtonIcon to="https://github.com/shuriken-ui" target="_blank" rel="noopener" size="sm" rounded="lg" class="hidden lg:flex">
            <Icon name="fa6-brands:github" class="w-4 h-4" />
          </BaseButtonIcon>
          <div class="scale-90 hidden lg:flex">
            <BaseThemeToggle />
          </div>
        </div>
        <!--Mobile menu button-->
        <div class="flex ms-4 lg:hidden">
          <button
            class="relative group h-10 w-10 flex items-center justify-center nui-mask nui-mask-blob"
            :class="[mobileOpen ? 'bg-muted-100' : '', mobileOpen && y > 60 ? 'dark:bg-muted-900' : 'dark:bg-muted-950']"
            @click="mobileOpen = !mobileOpen"
          >
            <div class="relative flex overflow-hidden items-center justify-center w-[24px] h-[24px] transform transition-all duration-200">
              <div class="flex flex-col justify-between w-[24px] h-4 transform transition-all duration-300 origin-center overflow-hidden">
                <div class="bg-muted-500 h-[2px] w-7 transform transition-all duration-300 origin-left" :class="mobileOpen ? 'translate-x-10' : ''"></div>
                <div class="bg-muted-500 h-[2px] w-7 rounded transform transition-all duration-300 delay-75" :class="mobileOpen ? 'translate-x-10' : ''"></div>
                <div class="bg-muted-500 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150" :class="mobileOpen ? 'translate-x-10' : ''"></div>

                <div class="absolute items-center justify-between transform transition-all duration-500 scale-105 top-2 flex" :class="[mobileOpen ? 'w-12 translate-x-1' : 'w-0 -translate-x-10']">
                  <div class="absolute bg-muted-500 h-[2px] w-4 transform transition-all duration-500 delay-300" :class="mobileOpen ? 'rotate-45' : 'rotate-0'"></div>
                  <div class="absolute bg-muted-500 h-[2px] w-4 transform transition-all duration-500 delay-300" :class="mobileOpen ? '-rotate-45' : '-rotate-0'"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <!--Mobile menu-->
        <div
          class="z-20 block lg:hidden fixed top-16 start-0 w-full border-y border-muted-200 bg-white dark:bg-muted-950 transition-all duration-300 shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20"
          :class="[mobileOpen ? 'h-[460px] opacity-100' : 'h-0 opacity-0']"
        >
          <div class="w-full max-w-[240px] mx-auto flex flex-col text-center py-6 transition-opacity duration-300" :class="[mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none']">
            <div class="flex flex-col gap-2">
              <NuxtLink
                to="/docs"
                class="inline-flex items-center justify-center px-4 py-1.5 text-base font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
                >Documentation</NuxtLink
              >
              <NuxtLink
                to="/changelog"
                class="inline-flex items-center justify-center px-4 py-1.5 text-base font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
                >Changelog
              </NuxtLink>
              <NuxtLink
                to="/playground"
                class="inline-flex items-center justify-center px-4 py-1.5 text-base font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
                >Playground
              </NuxtLink>
            </div>
            <hr class="my-6 border-t border-muted-200 dark:border-muted-800" />
            <div class="flex flex-col gap-2">
              <button
                type="button"
                class="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-base font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                <Icon name="mingcute:drop-fill" class="w-5 h-5 text-primary-500" />
                <span>Customize</span>
              </button>
              <NuxtLink
                to="https://github.com/shuriken-ui"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-base font-medium text-muted-600 dark:text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 transition-all duration-200 border border-transparent rounded-full hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                <Icon name="fa6-brands:github" class="w-5 h-5" />
                <span>Github</span>
              </NuxtLink>
              <div class="flex items-center justify-center py-4">
                <BaseThemeSwitch />
              </div>
            </div>
          </div>
          <div class="px-8 max-w-md mx-auto transition-opacity duration-300" :class="[mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none']">
            <BaseButton rounded="lg" size="lg" class="w-full">
              <Icon name="lucide:search" class="w-4 h-4" />
              <span>Search</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
