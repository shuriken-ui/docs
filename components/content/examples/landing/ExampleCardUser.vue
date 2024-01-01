
import type { BaseParagraph } from '#build/components';
<template>
  <BaseCard rounded="lg" color="white-contrast" shadow="flat" class="w-64 shrink-0 hidden md:flex flex-col px-6 py-8">
    <div class="flex justify-center items-center relative w-20 h-20 mx-auto rounded-full">
      <img src="/img/photo/avatars/56.jpg" class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm" alt="Avatar image" />
      <img
        src="/img/stacks/javascript.svg"
        class="block absolute right-0 bottom-0 w-8 h-8 bg-muted-100 dark:bg-muted-800 rounded-full border-2 border-white dark:border-muted-800"
        alt="Avatar badge"
      />
    </div>
    <div class="text-center py-4">
      <BaseHeading as="h3" size="md" weight="semibold" class="text-muted-800 dark:text-muted-100">
        Kendra Wilson
      </BaseHeading>
      <BaseParagraph size="xs" class="text-muted-400">
        UI/UX Designer
      </BaseParagraph>
    </div>
    <div class="flex items-center justify-center gap-3">
      <div class="h-9 w-9 flex items-center justify-center rounded-full bg-muted-100 dark:bg-muted-900 text-muted-800 dark:text-muted-100">
        <Icon name="simple-icons:adobeillustrator" class="w-4 h-4" />
      </div>
      <div class="h-9 w-9 flex items-center justify-center rounded-full bg-muted-100 dark:bg-muted-900 text-muted-800 dark:text-muted-100">
        <Icon name="cib:figma" class="w-4 h-4" />
      </div>
      <div class="h-9 w-9 flex items-center justify-center rounded-full bg-muted-100 dark:bg-muted-900 text-muted-800 dark:text-muted-100">
        <Icon name="fa-brands:sketch" class="w-4 h-4" />
      </div>
    </div>
  </BaseCard>
</template>
