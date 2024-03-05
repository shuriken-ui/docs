import type { BaseParagraph } from '#build/components'; import type { BaseParagraph } from '#build/components'; import type { BaseParagraph } from '#build/components';
<template>
  <BaseCard
    color="default-contrast"
    rounded="lg"
    shadow="flat"
    class="relative max-w-xs p-6 md:hidden xl:block"
  >
    <a href="#" class="block h-full w-full">
      <div class="mb-4 flex items-center border-b border-muted-200 pb-4 dark:border-muted-700">
        <BaseAvatar src="/img/photo/avatars/51.jpg" size="md" />

        <div class="pl-3">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            class="text-muted-800 dark:text-muted-100"
          > Michael Scott </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-400"> Frontend Developer </BaseParagraph>
        </div>
      </div>
      <div class="w-full">
        <BaseParagraph
          as="h3"
          size="md"
          weight="medium"
          lead="tight"
          class="mb-4 text-muted-800 dark:text-muted-100"
        >Improve the design of the overall project</BaseParagraph>
        <BaseParagraph
          size="xs"
          weight="medium"
          class="text-muted-800 dark:text-muted-100"
        >
          <span class="flex items-center gap-2">
            <Icon name="ion:calendar-outline" class="h-4 w-4" />
            <span>Sunday, 23 May</span>
          </span>
        </BaseParagraph>
        <BaseParagraph size="xs" class="mb-4 mt-2 text-muted-400">You’ve been coding for a while now and know your way around...</BaseParagraph>
      </div>
      <div class="my-2 flex items-center justify-between">
        <p class="mt-2 font-sans text-xs text-muted-600 dark:text-muted-300">4/6 tasks completed</p>
      </div>
      <div class="relative h-1.5 w-full overflow-hidden rounded-full bg-muted-200 dark:bg-muted-800">
        <div class="absolute left-0 top-0 h-full rounded-full bg-primary-500 transition duration-300" style="width: 82%" />
      </div>
    </a>
  </BaseCard>
</template>
