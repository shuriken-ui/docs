<template>
  <BaseCard
    color="default-contrast"
    rounded="lg"
    shadow="flat"
    class="relative -end-20 z-10 p-4"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center space-x-2">
        <BaseAvatar
          src="/img/photo/avatars/30.jpg"
          badge-src="/img/stacks/react.svg"
          size="md"
        />
        <div>
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-muted-100"
          >
            Amber D.
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-400">
            Joined 3 weeks ago
          </BaseParagraph>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <BaseButton
          size="sm"
          color="none"
          rounded="md"
          class="bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800"
        >
          Hire Now
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>
