import type { ReactiveEffect } from 'nuxt/dist/app/compat/capi'; import type { BaseParagraph } from '#build/components'; import type { BaseHeading } from '#build/components';
<template>
  <div class="relative w-96">
    <div class="group relative mb-2">
      <BaseInput
        icon="lucide:search"
        contrast="default-contrast"
        size="lg"
        rounded="lg"
        placeholder="Search for a tech..."
      />
    </div>
    <div
      class="relative w-full rounded-lg border border-muted-300 bg-white p-2 shadow-xl shadow-muted-300/20 transition-all duration-300 dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-900/50"
    >
      <ul>
        <li>
          <a href="#" class="group flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800/50">
            <Icon name="logos:tailwindcss-icon" class="h-6 w-6" />
            <div class="leading-none">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                class="text-muted-600 dark:text-muted-100"
              > Tailwind CSS </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> CSS Framework </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="ml-auto h-4 w-4 -translate-x-1 text-muted-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
        </li>
        <li>
          <a href="#" class="group flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800/50">
            <Icon name="logos:vue" class="h-6 w-6" />
            <div class="leading-none">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                class="text-muted-600 dark:text-muted-100"
              > Vue </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> Javascript Framework </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="ml-auto h-4 w-4 -translate-x-1 text-muted-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
        </li>
        <li>
          <a href="#" class="group flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800/50">
            <Icon name="logos:react" class="h-6 w-6" />
            <div class="leading-none">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                class="text-muted-600 dark:text-muted-100"
              > React.js </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> Javascript Framework </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="ml-auto h-4 w-4 -translate-x-1 text-muted-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
        </li>
        <li>
          <a href="#" class="group flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800/50">
            <Icon name="logos:vitejs" class="h-6 w-6" />
            <div class="leading-none">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                class="text-muted-600 dark:text-muted-100"
              > Vite.js </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"> Build tool / bundler </BaseParagraph>
            </div>
            <Icon name="lucide:arrow-right" class="ml-auto h-4 w-4 -translate-x-1 text-muted-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
