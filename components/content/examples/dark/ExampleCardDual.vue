<template>
  <div class="py-6">
    <div class="flex w-full rounded-xl overflow-hidden">
      <div class="w-full p-6 bg-muted-50 dark:bg-muted-950">
        <BaseCard color="white" class="p-6 flex flex-col items-center !border-muted-300 dark:!border-muted-700">
          <BaseAvatar src="/img/avatars/11.svg" size="xl" badge-src="/img/stacks/react.svg" />
          <div class="flex items-center justify-center gap-1 mt-4 mb-2">
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
          </div>
          <div class="text-center">
            <BaseHeading as="h4" size="lg" weight="medium" class="text-muted-800 dark:text-muted-100"> John Baxter </BaseHeading>
            <BaseText size="xs" class="text-muted-400">Software Engineer</BaseText>
            <BaseParagraph size="sm" lead="tight" class="text-muted-500 dark:text-muted-400 mt-2"> John is a software engineer at UIW where he works on the UX and design systems team.</BaseParagraph>
          </div>
          <div class="mt-6 flex w-full gap-3">
            <BaseButton class="w-full" size="sm" rounded="md" color="primary">Hire Now</BaseButton>
            <BaseButton class="w-full" size="sm" rounded="md">Profile</BaseButton>
          </div>
        </BaseCard>
      </div>
      <div class="dark w-full p-6 bg-muted-950 dark:bg-muted-950/60">
        <BaseCard color="white" class="p-6 flex flex-col items-center !border-muted-300 dark:!border-muted-700">
          <BaseAvatar src="/img/avatars/11.svg" size="xl" badge-src="/img/stacks/react.svg" />
          <div class="flex items-center justify-center gap-1 mt-4 mb-2">
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="w-3 h-3 text-yellow-400" />
          </div>
          <div class="text-center">
            <BaseHeading as="h4" size="lg" weight="medium" class="text-muted-800 dark:text-muted-100"> John Baxter </BaseHeading>
            <BaseText size="xs" class="text-muted-400">Software Engineer</BaseText>
            <BaseParagraph size="sm" lead="tight" class="text-muted-500 dark:text-muted-300 mt-2"> John is a software engineer at UIW where he works on the UX and design systems team.</BaseParagraph>
          </div>
          <div class="mt-6 flex w-full gap-3">
            <BaseButton class="w-full" size="sm" rounded="md" color="primary">Hire Now</BaseButton>
            <BaseButton class="w-full" size="sm" rounded="md">Profile</BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
