import type { BaseParagraph } from '#build/components';
<template>
  <BaseCard
    color="default-contrast"
    rounded="lg"
    shadow="flat"
    class="mt-10 flex w-80 items-center p-3"
  >
    <div class="relative h-24 w-24">
      <NuxtImg
        loading="lazy"
        decoding="async"
        format="webp"
        src="/img/photo/square-1.jpg"
        alt="Card image"
        class="h-full w-full rounded-xl object-cover"
      />
      <button class="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-muted-900 shadow-lg dark:bg-muted-950">
        <Icon name="mingcute:play-fill" class="text-white" />
      </button>
    </div>
    <div class="ml-4">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-muted-100"
      >
        Karina Spiegler
      </BaseHeading>
      <BaseParagraph size="sm" class="mb-1 text-muted-400">
        74 tracks
      </BaseParagraph>
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
