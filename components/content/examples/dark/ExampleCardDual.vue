<template>
  <div class="py-6">
    <div class="flex w-full flex-col overflow-hidden rounded-xl md:flex-row">
      <div class="w-full bg-muted-50 p-6 dark:bg-muted-950">
        <BaseCard color="default" class="flex flex-col items-center !border-muted-300 p-6 dark:!border-muted-700">
          <BaseAvatar
            src="/img/avatars/11.svg"
            size="xl"
            badge-src="/img/stacks/react.svg"
          />
          <div class="mb-2 mt-4 flex items-center justify-center gap-1">
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
          </div>
          <div class="text-center">
            <BaseHeading
              as="h4"
              size="lg"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              John Baxter
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400">
              Software Engineer
            </BaseText>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="mt-2 text-muted-500 dark:text-muted-400"
            >
              John is a software engineer at UIW where he works on the UX and design systems team.
            </BaseParagraph>
          </div>
          <div class="mt-6 flex w-full gap-3">
            <BaseButton
              class="w-full"
              size="sm"
              rounded="md"
              color="primary"
            >
              Hire Now
            </BaseButton>
            <BaseButton
              class="w-full"
              size="sm"
              rounded="md"
            >
              Profile
            </BaseButton>
          </div>
        </BaseCard>
      </div>
      <div class="dark w-full bg-muted-950 p-6 dark:bg-muted-950/60">
        <BaseCard color="default" class="flex flex-col items-center !border-muted-300 p-6 dark:!border-muted-700">
          <BaseAvatar
            src="/img/avatars/11.svg"
            size="xl"
            badge-src="/img/stacks/react.svg"
          />
          <div class="mb-2 mt-4 flex items-center justify-center gap-1">
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
            <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
          </div>
          <div class="text-center">
            <BaseHeading
              as="h4"
              size="lg"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              John Baxter
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400">
              Software Engineer
            </BaseText>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="mt-2 text-muted-500 dark:text-muted-300"
            >
              John is a software engineer at UIW where he works on the UX and design systems team.
            </BaseParagraph>
          </div>
          <div class="mt-6 flex w-full gap-3">
            <BaseButton
              class="w-full"
              size="sm"
              rounded="md"
              color="primary"
            >
              Hire Now
            </BaseButton>
            <BaseButton
              class="w-full"
              size="sm"
              rounded="md"
            >
              Profile
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
