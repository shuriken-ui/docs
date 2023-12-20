import type { BaseParagraph } from '#build/components'; import type { BaseHeading } from '#build/components';
<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-50 dark:bg-muted-900 rounded-xl p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BaseCard color="white" class="p-4 flex items-center gap-2">
          <BaseAvatar src="/img/avatars/15.svg" />
          <div>
            <BaseHeading as="h4" size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100"> Josh Meyers </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400"> UI/UX Designer </BaseParagraph>
          </div>
        </BaseCard>
        <BaseCard color="muted" class="p-4 flex items-center gap-2">
          <BaseAvatar src="/img/avatars/10.svg" />
          <div>
            <BaseHeading as="h4" size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100"> Kendra Wilson </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400"> Sales Manager </BaseParagraph>
          </div>
        </BaseCard>
        <BaseCard color="white-contrast" class="p-4 flex items-center gap-2">
          <BaseAvatar src="/img/avatars/24.svg" />
          <div>
            <BaseHeading as="h4" size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100"> Anna Lopez </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400"> Project Manager </BaseParagraph>
          </div>
        </BaseCard>
        <BaseCard color="muted-contrast" class="p-4 flex items-center gap-2">
          <BaseAvatar src="/img/avatars/1.svg" />
          <div>
            <BaseHeading as="h4" size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100"> Michael Jennings </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400"> Product Designer </BaseParagraph>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
