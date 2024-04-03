<script setup lang="ts">
const appConfig = useAppConfig()

const { data } = await useFetch('/api/versions')
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-white dark:bg-muted-900">
    <svg class="h-0">
      <defs>
        <clipPath id="clip0_1232_2031"><rect
          width="1440"
          height="1024"
          fill="white"
        /></clipPath>
      </defs>
    </svg>
    <div class="absolute start-0 top-0 flex h-full w-full justify-center">
      <div class="shrink-0">
        <svg
          width="1640"
          height="1024"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1232_2031)">
            <path
              d="M15.5 1024V0M79.5 1024V0M143.5 1024V0M207.5 1024V0M271.5 1024V0M335.5 1024V0M399.5 1024V0M463.5 1024V0M527.5 1024V0M591.5 1024V0M655.5 1024V0M719.5 1024V0M783.5 1024V0M847.5 1024V0M911.5 1024V0M975.5 1024V0M1039.5 1024V0M1103.5 1024V0M1167.5 1024V0M1231.5 1024V0M1295.5 1024V0M1359.5 1024V0M1423.5 1024V0M0 31.5H1440M0 95.5H1440M0 159.5H1440M0 223.5H1440M0 287.5H1440M0 351.5H1440M0 415.5H1440M0 479.5H1440M0 543.5H1440M0 607.5H1440M0 671.5H1440M0 735.5H1440M0 799.5H1440M0 863.5H1440M0 927.5H1440M0 991.5H1440"
              class="stroke-current text-muted-100 dark:text-muted-800/50"
            />
            <path d="M272 160H335V223H272V160Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M1168 800H1231V863H1168V800Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M528 96H591V159H528V96Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M1104 160H1167V223H1104V160Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M1232 352H1295V415H1232V352Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M1040 672H1103V735H1040V672Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M784 800H847V863H784V800Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M336 480H399V543H336V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M208 800H271V863H208V800Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M464 736H527V799H464V736Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M336 224H399V287H336V224Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M976 287H1039V350H976V287Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M720 864H783V927H720V864Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M1232 480H1295V543H1232V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M1168 544H1231V607H1168V544Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M784 224H847V287H784V224Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M208 352H271V415H208V352Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M272 608H335V671H272V608Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M144 480H207V543H144V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M848 32H911V95H848V32Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M528 352H591V415H528V352Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            <path d="M912 480H975V543H912V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
          </g>
        </svg>
      </div>
    </div>

    <div class="relative z-[2] w-full px-4">
      <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between lg:px-6">
        <div class="flex w-1/5 shrink-0 items-center gap-2">
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
        </div>
        <div class="flex grow items-center justify-center">
          <NuxtLink to="/" class="text-muted-600 transition-colors duration-300 hover:text-primary-600 dark:text-muted-100 dark:hover:text-primary-500">
            <LogoText class="hidden h-8 w-auto md:block" />
            <Logo class="block h-10 w-auto md:hidden" />
          </NuxtLink>
        </div>
        <div class="flex w-1/5 shrink-0 items-center justify-end">
          <BaseThemeSwitch />
        </div>
      </div>
    </div>
    <div class="relative z-[2] mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
      <div class="mx-auto mb-6 max-w-2xl text-center">
        <h1 class="text-4xl font-light leading-tight text-muted-900 dark:text-muted-100 sm:text-4xl sm:leading-tight lg:text-4xl lg:leading-tight">
          Documentation
        </h1>
        <p class="mt-5 px-6 text-sm font-medium uppercase text-muted-600 dark:text-muted-400">
          Select a Documentation Section
        </p>
      </div>

      <div class="w-full py-10">
        <div class="grid grid-cols-12 gap-5">
          <div class="group/stack relative col-span-12 p-0.5 md:col-span-6 lg:col-span-6 ltablet:col-span-6">
            <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-500 to-info-400 opacity-0 blur-lg transition-opacity duration-500 group-hover/stack:opacity-30" />
            <NuxtLink to="/docs/guide">
              <BaseCard
                color="default-contrast"
                rounded="lg"
                class="flex flex-col items-start gap-6 !border-muted-300 p-6 dark:!border-muted-800 md:flex-row"
              >
                <Icon name="circum:palette" class="h-auto w-14 shrink-0 text-muted-300 transition-colors duration-300 group-hover/stack:text-primary-500 dark:text-muted-700 dark:group-hover/stack:text-primary-500 md:w-14 lg:w-14 ltablet:w-12" />
                <div class="block">
                  <h3 class="font-sans text-lg font-medium text-muted-800 dark:text-muted-100">
                    Guide
                  </h3>
                  <p class="font-alt text-sm text-muted-500 dark:text-muted-400 ltablet:text-xs">
                    Discover how to intall and use Shuriken UI in your project. Explore its theming concepts to create a consistent design system.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
          <div class="group/stack relative col-span-12 p-0.5 md:col-span-6 lg:col-span-6 ltablet:col-span-6">
            <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-500 to-info-400 opacity-0 blur-lg transition-opacity duration-500 group-hover/stack:opacity-30" />
            <NuxtLink to="/docs/reference">
              <BaseCard
                color="default-contrast"
                rounded="lg"
                class="flex flex-col items-start gap-6 !border-muted-300 p-6 dark:!border-muted-800 md:flex-row"
              >
                <Icon name="circum:grid-4-1" class="h-auto w-14 shrink-0 text-muted-300 transition-colors duration-300 group-hover/stack:text-primary-500 dark:text-muted-700 dark:group-hover/stack:text-primary-500 md:w-14 lg:w-14 ltablet:w-12" />
                <div class="block">
                  <h3 class="font-sans text-lg font-medium text-muted-800 dark:text-muted-100">
                    Reference
                  </h3>
                  <p class="font-alt text-sm text-muted-500 dark:text-muted-400 ltablet:text-xs">
                    Explore the components, directives, and utilities that Shuriken UI provides to build your application, and learn to use them.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
          <div class="group/stack relative col-span-12 p-0.5 md:col-span-6 lg:col-span-4 ltablet:col-span-4">
            <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-500 to-info-400 opacity-0 blur-lg transition-opacity duration-500 group-hover/stack:opacity-30" />
            <NuxtLink to="/docs/reference/nuxt">
              <BaseCard
                color="default-contrast"
                rounded="lg"
                class="!border-muted-300 p-6 dark:!border-muted-800"
              >
                <DiagramNuxt class="opacity-40 transition-all duration-300 group-hover/stack:opacity-100" />
                <div class="mt-4">
                  <div class="mb-3 flex items-center justify-between">
                    <h3 class="font-sans text-lg font-medium text-muted-800 dark:text-muted-100">
                      Nuxt
                    </h3>
                    <BaseTag size="sm" rounded="full">
                      v{{ data ? data[0]?.version : '0.0.0' }}
                    </BaseTag>
                  </div>
                  <p class="font-alt text-sm text-muted-500 dark:text-muted-400 ltablet:text-xs">
                    Shuriken UI/Nuxt is a layer on top of Shuriken/Tailwind that provides a set of components and directives to work with Nuxt.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
          <div class="group/stack relative col-span-12 p-0.5 md:col-span-6 lg:col-span-4 ltablet:col-span-4">
            <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-500 to-info-400 opacity-0 blur-lg transition-opacity duration-500 group-hover/stack:opacity-30" />
            <NuxtLink to="/docs/reference/react">
              <BaseCard
                color="default-contrast"
                rounded="lg"
                class="!border-muted-300 p-6 dark:!border-muted-800"
              >
                <DiagramNext class="opacity-40 transition-all duration-300 group-hover/stack:opacity-100" />
                <div class="mt-4">
                  <div class="mb-3 flex items-center justify-between">
                    <h3 class="font-sans text-lg font-medium text-muted-800 dark:text-muted-100">
                      React
                    </h3>
                    <BaseTag size="sm" rounded="full">
                      v{{ data ? data[1]?.version : '0.0.0' }}
                    </BaseTag>
                  </div>
                  <p class="font-alt text-sm text-muted-500 dark:text-muted-400 ltablet:text-xs">
                    Shuriken UI/React is a plugin built on top of Shuriken/Tailwind that provides a set of components and directives to work with React.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
          <div class="group/stack relative col-span-12 p-0.5 md:col-span-6 lg:col-span-4 ltablet:col-span-4">
            <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-500 to-info-400 opacity-0 blur-lg transition-opacity duration-500 group-hover/stack:opacity-30" />
            <NuxtLink to="/docs/reference/tailwind">
              <BaseCard
                color="default-contrast"
                rounded="lg"
                class="!border-muted-300 p-6 dark:!border-muted-800"
              >
                <DiagramTailwind class="opacity-40 transition-all duration-300 group-hover/stack:opacity-100" />
                <div class="mt-4">
                  <div class="mb-3 flex items-center justify-between">
                    <h3 class="font-sans text-lg font-medium text-muted-800 dark:text-muted-100">
                      Tailwind
                    </h3>
                    <BaseTag size="sm" rounded="full">
                      v{{ data ? data[2]?.version : '0.0.0' }}
                    </BaseTag>
                  </div>
                  <p class="font-alt text-sm text-muted-500 dark:text-muted-400 ltablet:text-xs">
                    Shuriken/Tailwind is built on top of Tailwind CSS and made to work everywhere. You don't need anything than the default Tailwind setup.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
