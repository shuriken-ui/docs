import type { BaseParagraph } from '#build/components'; import type { BaseParagraph } from '#build/components'; import type { BaseParagraph } from '#build/components';
<template>
  <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="relative md:hidden xl:block p-6 max-w-xs">
    <a href="#" class="block w-full h-full">
      <div class="flex items-center pb-4 mb-4 border-b border-muted-200 dark:border-muted-700">
        <BaseAvatar src="/img/photo/avatars/51.jpg" size="md" />

        <div class="pl-3">
          <BaseHeading as="h3" size="md" weight="semibold" class="text-muted-800 dark:text-muted-100"> Michael Scott </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-400"> Frontend Developer </BaseParagraph>
        </div>
      </div>
      <div class="w-full">
        <BaseParagraph as="h3" size="md" weight="medium" lead="tight" class="mb-4 text-muted-800 dark:text-muted-100">Improve the design of the overall project</BaseParagraph>
        <BaseParagraph size="xs" weight="medium" class="text-muted-800 dark:text-muted-100">
          <span class="flex items-center gap-2">
            <Icon name="ion:calendar-outline" class="w-4 h-4" />
            <span>Sunday, 23 May</span>
          </span>
        </BaseParagraph>
        <BaseParagraph size="xs" class="mt-2 mb-4 text-muted-400">You’ve been coding for a while now and know your way around...</BaseParagraph>
      </div>
      <div class="flex justify-between items-center my-2">
        <p class="mt-2 font-sans text-xs text-muted-600 dark:text-muted-300">4/6 tasks completed</p>
      </div>
      <div class="overflow-hidden relative w-full h-1.5 bg-muted-200 dark:bg-muted-800 rounded-full">
        <div class="absolute top-0 left-0 h-full bg-primary-500 rounded-full transition duration-300" style="width: 82%" />
      </div>
    </a>
  </BaseCard>
</template>
