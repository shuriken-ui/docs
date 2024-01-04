<template>
  <div class="relative bg-white dark:bg-muted-900 min-h-screen overflow-hidden">
    <svg class="h-0">
      <defs>
        <clipPath id="clip0_1232_2031"><rect width="1440" height="1024" fill="white"></rect></clipPath>
      </defs>
    </svg>
    <div class="flex absolute top-0 start-0 h-full w-full justify-center">
      <div class="shrink-0">
        <svg width="1640" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1232_2031)">
            <path
              d="M15.5 1024V0M79.5 1024V0M143.5 1024V0M207.5 1024V0M271.5 1024V0M335.5 1024V0M399.5 1024V0M463.5 1024V0M527.5 1024V0M591.5 1024V0M655.5 1024V0M719.5 1024V0M783.5 1024V0M847.5 1024V0M911.5 1024V0M975.5 1024V0M1039.5 1024V0M1103.5 1024V0M1167.5 1024V0M1231.5 1024V0M1295.5 1024V0M1359.5 1024V0M1423.5 1024V0M0 31.5H1440M0 95.5H1440M0 159.5H1440M0 223.5H1440M0 287.5H1440M0 351.5H1440M0 415.5H1440M0 479.5H1440M0 543.5H1440M0 607.5H1440M0 671.5H1440M0 735.5H1440M0 799.5H1440M0 863.5H1440M0 927.5H1440M0 991.5H1440"
              class="stroke-current text-muted-100 dark:text-muted-800/50"
            ></path>
            <path d="M272 160H335V223H272V160Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M1168 800H1231V863H1168V800Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M528 96H591V159H528V96Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M1104 160H1167V223H1104V160Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M1232 352H1295V415H1232V352Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M1040 672H1103V735H1040V672Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M784 800H847V863H784V800Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M336 480H399V543H336V480Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M208 800H271V863H208V800Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M464 736H527V799H464V736Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M336 224H399V287H336V224Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M976 287H1039V350H976V287Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M720 864H783V927H720V864Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M1232 480H1295V543H1232V480Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M1168 544H1231V607H1168V544Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M784 224H847V287H784V224Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M208 352H271V415H208V352Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M272 608H335V671H272V608Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M144 480H207V543H144V480Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M848 32H911V95H848V32Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M528 352H591V415H528V352Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
            <path d="M912 480H975V543H912V480Z" class="fill-current text-muted-50 dark:text-muted-800/20"></path>
          </g>
        </svg>
      </div>
    </div>

    <div class="relative z-[2] w-full px-4">
      <div class="h-16 w-full max-w-7xl mx-auto flex items-center justify-between lg:px-6">
        <div class="w-1/5 shrink-0 flex items-center gap-2">
          <NuxtLink to="/" class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
            <Icon name="fa6-brands:github" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="/" class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
            <Icon name="ri:twitter-x-fill" class="w-4 h-4" />
          </NuxtLink>
        </div>
        <div class="grow flex items-center justify-center">
          <NuxtLink to="/" class="text-muted-600 dark:text-muted-100 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
            <LogoText class="h-8 w-auto hidden md:block" />
            <Logo class="h-10 w-auto block md:hidden" />
          </NuxtLink>
        </div>
        <div class="w-1/5 shrink-0 flex items-center justify-end">
          <BaseThemeSwitch />
        </div>
      </div>
    </div>
    <div class="relative z-[2] pt-16 md:pt-28 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid cols-1 md:grid-cols-2 gap-6">
        <div class="h-full flex items-center">
          <div class="max-w-lg lg:max-w-none">
            <BaseParagraph size="md" weight="semibold" class="text-primary-600">Changelogs</BaseParagraph>
            <BaseHeading as="h2" size="3xl" weight="semibold" class="my-4 sm:!text-4xl lg:my-6 lg:!text-5xl lg:pe-8 tracking-light xs:!leading-snug text-muted-900 dark:text-white"
              >Keep up with the most recent changes and improvements.</BaseHeading
            >
            <BaseParagraph size="md" class="max-w-sm text-muted-500 dark:text-muted-400">
              Select one of the following changelogs to see what's new in the latest version.
            </BaseParagraph>
          </div>
        </div>
        <div class="h-full">
          <div class="flex flex-col gap-4">
            <NuxtLink to="/changelog/nuxt" class="group/link block w-full max-w-sm mx-auto">
              <BaseCard color="white-contrast" rounded="lg" shadow="hover" class="p-6 group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100">
                <div class="flex items-center gap-5">
                  <Icon name="logos:nuxt-icon" class="w-8 h-8" />
                  <div>
                    <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100">Nuxt</BaseHeading>
                    <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">@shuriken-ui/nuxt</BaseParagraph>
                  </div>
                  <div class="ms-auto">
                    <BaseTag size="sm" rounded="full" color="muted">v2.0.0</BaseTag>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
            <NuxtLink to="/changelog/react" class="group/link block w-full max-w-sm mx-auto">
              <BaseCard color="white-contrast" rounded="lg" shadow="hover" class="p-6 group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100">
                <div class="flex items-center gap-5">
                  <Icon name="logos:react" class="w-8 h-8" />
                  <div>
                    <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100">React</BaseHeading>
                    <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">@shuriken-ui/react</BaseParagraph>
                  </div>
                  <div class="ms-auto">
                    <BaseTag size="sm" rounded="full" color="muted">v0.0.0-alpha.0</BaseTag>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
            <NuxtLink to="/changelog/tailwind" class="group/link block w-full max-w-sm mx-auto">
              <BaseCard color="white-contrast" rounded="lg" shadow="hover" class="p-6 group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100">
                <div class="flex items-center gap-5">
                  <Icon name="logos:tailwindcss-icon" class="w-8 h-8" />
                  <div>
                    <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100">Tailwind</BaseHeading>
                    <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">@shuriken-ui/tailwind</BaseParagraph>
                  </div>
                  <div class="ms-auto">
                    <BaseTag size="sm" rounded="full" color="muted">v2.0.0</BaseTag>
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
