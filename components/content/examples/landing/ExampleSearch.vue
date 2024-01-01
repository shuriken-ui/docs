import type { ReactiveEffect } from 'nuxt/dist/app/compat/capi'; import type { BaseParagraph } from '#build/components'; import type { BaseHeading } from '#build/components';
<template>
  <div class="relative w-96">
    <div class="group relative mb-2">
      <BaseInput icon="lucide:search" contrast="default-contrast" size="lg" rounded="lg" placeholder="Search for a tech..." />
    </div>
    <div
      class="relative w-full p-2 rounded-lg border border-muted-300 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-300/20 dark:shadow-muted-900/50 transition-all duration-300"
    >
      <ul>
        <li>
          <a href="#" class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800/50 transition-colors duration-300">
            <Icon name="logos:tailwindcss-icon" class="w-6 h-6" />
            <div class="leading-none">
              <BaseHeading as="h5" size="sm" weight="medium" class="text-muted-600 dark:text-muted-100"> Tailwind CSS </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> CSS Framework </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-muted-400 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </li>
        <li>
          <a href="#" class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800/50 transition-colors duration-300">
            <Icon name="logos:vue" class="w-6 h-6" />
            <div class="leading-none">
              <BaseHeading as="h5" size="sm" weight="medium" class="text-muted-600 dark:text-muted-100"> Vue </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> Javascript Framework </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-muted-400 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </li>
        <li>
          <a href="#" class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800/50 transition-colors duration-300">
            <Icon name="logos:react" class="w-6 h-6" />
            <div class="leading-none">
              <BaseHeading as="h5" size="sm" weight="medium" class="text-muted-600 dark:text-muted-100"> React.js </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> Javascript Framework </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-muted-400 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </li>
        <li>
          <a href="#" class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800/50 transition-colors duration-300">
            <Icon name="logos:vitejs" class="w-6 h-6" />
            <div class="leading-none">
              <BaseHeading as="h5" size="sm" weight="medium" class="text-muted-600 dark:text-muted-100"> Vite.js </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> Build tool / bundler </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-muted-400 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
