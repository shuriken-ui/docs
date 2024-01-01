
import type { BaseParagraph } from '#build/components';
<template>
  <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="flex items-center w-80 p-3 mt-10">
    <div class="relative w-24 h-24">
      <img src="/img/photo/square-1.jpg" alt="Card image" class="rounded-xl object-cover w-full h-full" />
      <button class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center h-12 w-12 bg-muted-900 dark:bg-muted-950 rounded-full shadow-lg">
        <Icon name="mingcute:play-fill" class="text-white" />
      </button>
    </div>
    <div class="ml-4">
      <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100">Karina Spiegler</BaseHeading>
      <BaseParagraph size="sm" class="text-muted-400 mb-1">74 tracks</BaseParagraph>
      <ul class="flex">
        <li>
          <Icon name="pepicons:star-filled" class="inline-block text-base text-yellow-400" />
        </li>
        <li>
          <Icon name="pepicons:star-filled" class="inline-block text-base text-yellow-400" />
        </li>
        <li>
          <Icon name="pepicons:star-filled" class="inline-block text-base text-yellow-400" />
        </li>
        <li>
          <Icon name="pepicons:star-filled" class="inline-block text-base text-yellow-400" />
        </li>
        <li>
          <Icon name="pepicons:star-filled" class="inline-block text-base text-yellow-400" />
        </li>
      </ul>
    </div>
  </BaseCard>
</template>
