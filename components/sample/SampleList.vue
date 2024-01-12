<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="basic"
    :tabs="[
      { label: 'Basic', value: 'basic' },
      { label: 'Icon', value: 'icon' },
      { label: 'Media', value: 'media' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'basic'" class="relative pb-4">
        <div class="space-y-8">
          <PlaygroundSampleRow label="Bullet" label-align="start">
            <div class="flex flex-wrap items-end gap-3">
              <BaseList class="ps-4">
                <li>Finish project UX</li>
                <li>Meet with Andy at 3:00pm</li>
                <li>Get groceries for Anna</li>
                <li>Pay water bill</li>
              </BaseList>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Order" label-align="start">
            <div class="flex flex-wrap items-end gap-3">
              <BaseList ordered class="ps-4">
                <li>Finish project UX</li>
                <li>Meet with Andy at 3:00pm</li>
                <li>Get groceries for Anna</li>
                <li>Pay water bill</li>
              </BaseList>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Sub" label-align="start">
            <div class="flex flex-wrap items-end gap-3">
              <BaseList>
                <BaseListItem title="Finish project UX" subtitle="Close resubing pending tasks" />
                <BaseListItem title="Meet with Andy at 3:00pm" subtitle="Meeting about next project steps" />
                <BaseListItem title="Get groceries for Anna" subtitle="In preparation of next Friday's party" />
                <BaseListItem title="Pay water bill" subtitle="Bill must be paid before next Tuesday" />
              </BaseList>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'icon'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Icon" label-align="start">
            <div class="flex flex-wrap items-end gap-3">
              <BaseList>
                <BaseListItem title="Finish project UX" subtitle="Close resubing pending tasks">
                  <Icon name="ph:check-circle-duotone" class="h-6 w-6 text-info-500" />
                </BaseListItem>
                <BaseListItem title="Meet with Andy at 3:00pm" subtitle="Meeting about next project steps">
                  <Icon name="ph:timer-duotone" class="h-6 w-6 text-success-500" />
                </BaseListItem>
                <BaseListItem title="Get groceries for Anna" subtitle="In preparation of next Friday's party">
                  <Icon name="ph:confetti-duotone" class="h-6 w-6 text-yellow-400" />
                </BaseListItem>
                <BaseListItem title="Pay water bill" subtitle="Bill must be paid before next Tuesday">
                  <Icon name="ph:receipt-duotone" class="h-6 w-6 text-danger-500" />
                </BaseListItem>
              </BaseList>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'media'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Image" label-align="start">
            <div class="flex flex-wrap items-end gap-3">
              <BaseList>
                <BaseListItem title="Finish project UX" subtitle="Close resubing pending tasks">
                  <BaseAvatar src="/img/avatars/10.svg" />
                </BaseListItem>
                <BaseListItem title="Meet with Andy at 3:00pm" subtitle="Meeting about next project steps">
                  <BaseAvatar src="/img/avatars/25.svg" />
                </BaseListItem>
                <BaseListItem title="Get groceries for Anna" subtitle="In preparation of next Friday's party">
                  <BaseAvatar src="/img/avatars/15.svg" />
                </BaseListItem>
                <BaseListItem title="Pay water bill" subtitle="Bill must be paid before next Tuesday">
                  <BaseAvatar src="/img/avatars/4.svg" />
                </BaseListItem>
              </BaseList>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
