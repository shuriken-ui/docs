import type { BaseParagraph } from '#build/components';
<template>
  <BaseCard
    rounded="lg"
    color="default-contrast"
    shadow="flat"
    class="hidden w-64 shrink-0 flex-col px-6 py-8 md:flex"
  >
    <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full">
      <NuxtImg
        loading="lazy"
        decoding="async"
        format="webp"
        src="/img/photo/avatars/56.jpg"
        class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
        alt="Avatar image"
      />
      <NuxtImg
        loading="lazy"
        decoding="async"
        src="/img/stacks/javascript.svg"
        class="absolute bottom-0 right-0 block h-8 w-8 rounded-full border-2 border-white bg-muted-100 dark:border-muted-800 dark:bg-muted-800"
        alt="Avatar badge"
      />
    </div>
    <div class="py-4 text-center">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        class="text-muted-800 dark:text-muted-100"
      >
        Kendra Wilson
      </BaseHeading>
      <BaseParagraph size="xs" class="text-muted-400">
        UI/UX Designer
      </BaseParagraph>
    </div>
    <div class="flex items-center justify-center gap-3">
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted-100 text-muted-800 dark:bg-muted-900 dark:text-muted-100">
        <Icon name="simple-icons:adobeillustrator" class="h-4 w-4" />
      </div>
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted-100 text-muted-800 dark:bg-muted-900 dark:text-muted-100">
        <Icon name="cib:figma" class="h-4 w-4" />
      </div>
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted-100 text-muted-800 dark:bg-muted-900 dark:text-muted-100">
        <Icon name="fa-brands:sketch" class="h-4 w-4" />
      </div>
    </div>
  </BaseCard>
</template>
