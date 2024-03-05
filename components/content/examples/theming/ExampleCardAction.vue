<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:py-8">
      <div class="mx-auto w-full max-w-md ">
        <BaseCard
          class="!border-muted-300 p-4 dark:!border-muted-800 md:p-6"
          color="default-contrast"
          rounded="md"
        >
          <div class="flex flex-col py-2">
            <BaseAvatar
              class="mx-auto"
              size="xl"
              src="/img/avatars/15.svg"
              badge-src="/img/stacks/react.svg"
            />
            <div class="mx-auto max-w-xs text-center">
              <BaseHeading
                tag="h2"
                size="md"
                weight="medium"
                class="mt-4"
              >
                Josh M. has invited you to the
                <BaseLink to="#" class="text-primary-800">
                  Banking Solution Website
                </BaseLink>
                project.
              </BaseHeading>
            </div>
            <div class="mx-auto max-w-sm">
              <div class="mt-6 flex items-center justify-center gap-3">
                <BaseAvatar
                  src="/img/avatars/25.svg"
                  size="xs"
                  data-nui-tooltip="Melany L."
                />
                <BaseAvatar
                  size="xs"
                  text="OD"
                  data-nui-tooltip="Oliver D."
                  class="bg-primary-500/20 text-primary-500"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="xs"
                  data-nui-tooltip="Hermann M."
                />
              </div>
              <div class="mt-2 text-center">
                <BaseText size="xs" class="text-muted-400">
                  And 5 others are members of this project
                </BaseText>
              </div>
              <div class="mt-6 flex items-center justify-between gap-2">
                <BaseButton rounded="md" class="w-full">
                  Decline
                </BaseButton>
                <BaseButton
                  rounded="md"
                  color="primary"
                  class="w-full"
                >
                  Accept
                </BaseButton>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
