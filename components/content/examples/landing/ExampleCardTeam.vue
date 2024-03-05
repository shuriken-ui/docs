import type { BaseParagraph } from '#build/components'; import type { BaseAvatar } from '#build/components';
<template>
  <BaseCard
    color="default-contrast"
    rounded="lg"
    shadow="flat"
    class="relative p-6"
  >
    <div class="mb-5 text-left">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        class="text-muted-800 dark:text-muted-100"
      >
        Team Members
      </BaseHeading>
    </div>
    <div class="flex flex-col justify-center">
      <div class="flex">
        <ul class="flex w-full items-center gap-1">
          <li class="flex flex-col items-center space-y-1 px-2">
            <div class="flex items-center justify-center">
              <a class href="#">
                <BaseAvatar
                  src="/img/photo/avatars/56.jpg"
                  badge-src="/img/stacks/react.svg"
                  size="md"
                />
              </a>
            </div>
            <BaseParagraph
              size="sm"
              weight="semibold"
              class="text-muted-800 dark:text-muted-100"
            >
              You
            </BaseParagraph>
          </li>

          <li class="flex flex-col items-center space-y-1 px-2">
            <div class="flex items-center justify-center">
              <a class href="#">
                <BaseAvatar
                  src="/img/photo/avatars/17.jpg"
                  badge-src="/img/stacks/html5.svg"
                  size="md"
                />
              </a>
            </div>
            <BaseParagraph
              size="sm"
              weight="normal"
              class="text-muted-400"
            >
              Emma
            </BaseParagraph>
          </li>

          <li class="flex flex-col items-center space-y-1 px-2">
            <div class="flex items-center justify-center">
              <a class href="#">
                <BaseAvatar
                  src="/img/photo/avatars/37.jpg"
                  badge-src="/img/stacks/javascript.svg"
                  size="md"
                />
              </a>
            </div>
            <p class="text-sm text-muted-400">
              Karl
            </p>
          </li>

          <li class="flex flex-col items-center space-y-1 px-2">
            <div class="flex items-center justify-center">
              <a class href="#">
                <BaseAvatar
                  src="/img/photo/avatars/19.jpg"
                  badge-src="/img/stacks/vuejs.svg"
                  size="md"
                />
              </a>
            </div>
            <p class="text-sm text-muted-400">
              Clark
            </p>
          </li>
        </ul>
      </div>
    </div>
  </BaseCard>
</template>
