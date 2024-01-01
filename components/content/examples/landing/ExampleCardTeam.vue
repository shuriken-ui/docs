import type { BaseParagraph } from '#build/components'; import type { BaseAvatar } from '#build/components';
<template>
  <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="relative p-6">
    <div class="text-left mb-5">
      <BaseHeading as="h3" size="md" weight="semibold" class="text-muted-800 dark:text-muted-100"> Team Members </BaseHeading>
    </div>
    <div class="flex flex-col justify-center">
      <div class="flex">
        <ul class="flex gap-1 items-center w-full">
          <li class="flex flex-col items-center px-2 space-y-1">
            <div class="flex justify-center items-center">
              <a class href="#">
                <BaseAvatar src="/img/photo/avatars/56.jpg" badge-src="/img/stacks/react.svg" size="md" />
              </a>
            </div>
            <BaseParagraph size="sm" weight="semibold" class="text-muted-800 dark:text-muted-100"> You </BaseParagraph>
          </li>

          <li class="flex flex-col items-center px-2 space-y-1">
            <div class="flex justify-center items-center">
              <a class href="#">
                <BaseAvatar src="/img/photo/avatars/17.jpg" badge-src="/img/stacks/html5.svg" size="md" />
              </a>
            </div>
            <BaseParagraph size="sm" weight="normal" class="text-muted-400"> Emma </BaseParagraph>
          </li>

          <li class="flex flex-col items-center px-2 space-y-1">
            <div class="flex justify-center items-center">
              <a class href="#">
                <BaseAvatar src="/img/photo/avatars/37.jpg" badge-src="/img/stacks/javascript.svg" size="md" />
              </a>
            </div>
            <p class="text-sm text-muted-400">Karl</p>
          </li>

          <li class="flex flex-col items-center px-2 space-y-1">
            <div class="flex justify-center items-center">
              <a class href="#">
                <BaseAvatar src="/img/photo/avatars/19.jpg" badge-src="/img/stacks/vuejs.svg" size="md" />
              </a>
            </div>
            <p class="text-sm text-muted-400">Clark</p>
          </li>
        </ul>
      </div>
    </div>
  </BaseCard>
</template>
