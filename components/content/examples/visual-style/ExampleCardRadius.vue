import type { BaseButton } from '#build/components'; import type { BaseCheckbox } from '#build/components'; import type { BaseTextarea } from '#build/components';
<template>
  <div class="py-6">
    <BaseCard
      color="muted"
      rounded="lg"
      class="!border-muted-300 dark:!border-muted-800"
    >
      <div class="flex flex-col divide-y divide-dashed divide-muted-300 dark:divide-muted-800">
        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <code class="rounded bg-primary-500/10 px-1 py-0.5 text-sm text-primary-600">rounded="none"</code>
          </div>
          <BaseCard
            color="default-contrast"
            rounded="none"
            class="border-muted-300 p-4 dark:!border-muted-800 md:p-6"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="none"
                src="/img/avatars/15.svg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="none"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    rounded="none"
                    color="muted"
                    label="Notify friends"
                  />
                  <BaseButton
                    color="primary"
                    rounded="none"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <code class="rounded bg-primary-500/10 px-1 py-0.5 text-sm text-primary-600">rounded="sm"</code>
          </div>
          <BaseCard
            color="default-contrast"
            rounded="sm"
            class="border-muted-300 p-4 dark:!border-muted-800 md:p-6"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="sm"
                src="/img/avatars/15.svg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="sm"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    rounded="sm"
                    color="muted"
                    label="Notify friends"
                  />
                  <BaseButton
                    color="primary"
                    rounded="sm"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <code class="rounded bg-primary-500/10 px-1 py-0.5 text-sm text-primary-600">rounded="md"</code>
          </div>
          <BaseCard
            color="default-contrast"
            rounded="md"
            class="border-muted-300 p-4 dark:!border-muted-800 md:p-6"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="md"
                src="/img/avatars/15.svg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="md"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    rounded="md"
                    color="muted"
                    label="Notify friends"
                  />
                  <BaseButton
                    color="primary"
                    rounded="md"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <code class="rounded bg-primary-500/10 px-1 py-0.5 text-sm text-primary-600">rounded="lg"</code>
          </div>
          <BaseCard
            color="default-contrast"
            rounded="lg"
            class="border-muted-300 p-4 dark:!border-muted-800 md:p-6"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="lg"
                src="/img/avatars/15.svg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="lg"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    rounded="lg"
                    color="muted"
                    label="Notify friends"
                  />
                  <BaseButton
                    color="primary"
                    rounded="lg"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <code class="rounded bg-primary-500/10 px-1 py-0.5 text-sm text-primary-600">rounded="full"</code>
          </div>
          <BaseCard
            color="default-contrast"
            rounded="lg"
            class="border-muted-300 p-4 dark:!border-muted-800 md:p-6"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="full"
                src="/img/avatars/15.svg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="lg"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    rounded="full"
                    color="muted"
                    label="Notify friends"
                  />
                  <BaseButton
                    color="primary"
                    rounded="full"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
