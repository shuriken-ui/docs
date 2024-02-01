<script setup lang="ts"></script>

<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-white dark:bg-muted-900">
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

    <div class="relative z-10 mx-auto max-w-2xl pt-40 text-center">
      <h1 class="px-6 text-xs font-medium uppercase tracking-wider text-muted-500 dark:text-muted-300">
        Components for Nuxt / React / Next.js
      </h1>
      <p class="font-pj mt-5 text-4xl font-bold leading-tight text-muted-900 dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
        Beautiful, Responsive UI
        <span class="relative inline-flex sm:inline">
          <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-800 via-info-400 to-primary-500 opacity-30 blur-lg" />
          <span class="relative"> Components </span>
        </span>
      </p>

      <div class="mt-6 flex flex-col gap-3 px-8 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:px-0">
        <BaseButton
          to="/docs/guide"
          size="lg"
          color="none"
          rounded="lg"
          class="group/button w-full gap-2 bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 sm:w-52"
        >
          <span>Learn Shuriken</span>
          <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
        </BaseButton>
        <BaseButton
          to="https://github.com/shuriken-ui"
          target="_blank"
          rel="noopener"
          size="lg"
          color="default"
          rounded="lg"
          class="group/button w-full gap-2 font-medium sm:w-52"
        >
          <span class="relative">
            <Icon name="fa6-brands:github" class="h-4 w-4 transition-opacity duration-300 group-hover/button:opacity-0" />
            <Icon name="fa:star" class="absolute start-0 top-1 h-4 w-4 -rotate-180 opacity-0 transition-all duration-300 group-hover/button:!rotate-0 group-hover/button:!opacity-100" />
          </span>
          <span>Star on Github</span>
        </BaseButton>
      </div>

      <div class="mx-auto w-full max-w-md px-4">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>

    <div class="relative z-[9] mx-auto mt-8 w-full max-w-7xl px-4 pb-12 lg:-mt-16">
      <ExampleShurikenComponents />
    </div>
  </div>
</template>
