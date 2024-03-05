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
    <div class="relative z-[2] mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:pt-28 lg:px-8">
      <div class="cols-1 grid gap-6 md:grid-cols-2">
        <div class="flex h-full items-center">
          <div class="max-w-lg lg:max-w-none">
            <BaseParagraph
              size="md"
              weight="semibold"
              class="text-primary-600"
            >
              Technical Blog
            </BaseParagraph>
            <BaseHeading
              as="h2"
              size="3xl"
              weight="semibold"
              class="tracking-light my-4 text-muted-900 dark:text-white sm:!text-4xl lg:my-6 lg:pe-8 lg:!text-5xl xs:!leading-snug"
            >
              Keep up with the most recent changes and improvements.
            </BaseHeading>
            <BaseParagraph size="md" class="max-w-sm text-muted-500 dark:text-muted-400">
              Select one of the following package to see what's new in the latest versions.
            </BaseParagraph>
          </div>
        </div>
        <div class="h-full">
          <div class="flex flex-col gap-4">
            <NuxtLink
              v-for="project in data"
              :key="project.packageName"
              :to="`/blog/${project.name}`"
              class="group/link mx-auto block w-full max-w-sm"
            >
              <BaseCard
                color="default-contrast"
                rounded="lg"
                shadow="hover"
                class="p-6 group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100"
              >
                <div class="flex items-center gap-5">
                  <Icon :name="project.icon" class="h-8 w-8" />
                  <div>
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ project.name }}
                    </BaseHeading>
                    <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
                      {{ project.packageName }}
                    </BaseParagraph>
                  </div>
                  <div class="ms-auto">
                    <BaseTag
                      size="sm"
                      rounded="full"
                      color="muted"
                    >
                      {{ project.version }}
                    </BaseTag>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
