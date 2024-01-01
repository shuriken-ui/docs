<template>
  <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="relative -end-20 p-4 z-10">
    <div class="flex justify-between items-center gap-4">
      <div class="flex items-center space-x-2">
        <a class href="#">
          <BaseAvatar src="/img/photo/avatars/30.jpg" badge-src="/img/stacks/react.svg" size="md" />
        </a>
        <div>
          <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100"> Amber D. </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-400">Joined 3 weeks ago</BaseParagraph>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <BaseButton size="sm" color="none" rounded="md" class="bg-muted-900 hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800 text-white">Hire Now</BaseButton>
      </div>
    </div>
  </BaseCard>
</template>
