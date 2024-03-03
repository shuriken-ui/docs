<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="image"
    :tabs="[
      { label: 'Image', value: 'image' },
      { label: 'Fallback', value: 'fallback' },
      { label: 'Masks', value: 'masks' },
      { label: 'Sizes', value: 'sizes' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'image'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Image">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/30.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/29.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/33.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/57.jpg"
                :rounded="rounded"
                size="sm"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Dot">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                :rounded="rounded"
                size="sm"
                dot="success"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                :rounded="rounded"
                size="sm"
                dot="info"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                :rounded="rounded"
                size="sm"
                dot="warning"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                :rounded="rounded"
                size="sm"
                dot="primary"
              />
              <BaseAvatar
                src="/img/photo/avatars/30.jpg"
                :rounded="rounded"
                size="sm"
                dot="pink"
              />
              <BaseAvatar
                src="/img/photo/avatars/29.jpg"
                :rounded="rounded"
                size="sm"
                dot="yellow"
              />
              <BaseAvatar
                src="/img/photo/avatars/33.jpg"
                :rounded="rounded"
                size="sm"
                dot="danger"
              />
              <BaseAvatar
                src="/img/photo/avatars/57.jpg"
                :rounded="rounded"
                size="sm"
                dot="success"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Badge">
            <div class="flex flex-wrap items-end gap-3 pb-4">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/30.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/29.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/33.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
              <BaseAvatar
                src="/img/photo/avatars/57.jpg"
                :rounded="rounded"
                size="sm"
                badge-src="/img/stacks/javascript.svg"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>

      <div v-else-if="activeValue === 'fallback'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="solid">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                text="J"
                :rounded="rounded"
                size="sm"
                class="!bg-muted-900 !text-muted-100 dark:!bg-muted-100 dark:!text-muted-700"
              />
              <BaseAvatar
                text="A"
                :rounded="rounded"
                size="sm"
                class="!bg-primary-500 !text-white"
              />
              <BaseAvatar
                text="F"
                :rounded="rounded"
                size="sm"
                class="!bg-info-500 !text-white"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="sm"
                class="!bg-success-500 !text-white"
              />
              <BaseAvatar
                text="T"
                :rounded="rounded"
                size="sm"
                class="!bg-warning-500 !text-white"
              />
              <BaseAvatar
                text="X"
                :rounded="rounded"
                size="sm"
                class="!bg-danger-500 !text-white"
              />
              <BaseAvatar
                text="C"
                :rounded="rounded"
                size="sm"
                class="!bg-yellow-400 !text-white"
              />
              <BaseAvatar
                text="P"
                :rounded="rounded"
                size="sm"
                class="!bg-indigo-500 !text-white"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Pastel">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                text="J"
                :rounded="rounded"
                size="sm"
                class="!bg-muted-100 !text-muted-700 dark:!bg-muted-800 dark:!text-muted-100"
              />
              <BaseAvatar
                text="A"
                :rounded="rounded"
                size="sm"
                class="!bg-primary-500/20 !text-primary-600"
              />
              <BaseAvatar
                text="F"
                :rounded="rounded"
                size="sm"
                class="!bg-info-500/20 !text-info-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="sm"
                class="!bg-success-500/20 !text-success-600"
              />
              <BaseAvatar
                text="T"
                :rounded="rounded"
                size="sm"
                class="!bg-warning-500/20 !text-warning-600"
              />
              <BaseAvatar
                text="X"
                :rounded="rounded"
                size="sm"
                class="!bg-danger-500/20 !text-danger-600"
              />
              <BaseAvatar
                text="C"
                :rounded="rounded"
                size="sm"
                class="!bg-yellow-400/20 !text-yellow-500"
              />
              <BaseAvatar
                text="P"
                :rounded="rounded"
                size="sm"
                class="!bg-indigo-500/20 !text-indigo-600"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Outline">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                text="J"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-muted-100 !text-muted-700 dark:!bg-muted-800 dark:!text-muted-100"
              />
              <BaseAvatar
                text="A"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-primary-500/20 !text-primary-600"
              />
              <BaseAvatar
                text="F"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-info-500/20 !text-info-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-success-500/20 !text-success-600"
              />
              <BaseAvatar
                text="T"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-warning-500/20 !text-warning-600"
              />
              <BaseAvatar
                text="X"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-danger-500/20 !text-danger-600"
              />
              <BaseAvatar
                text="C"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-yellow-400/20 !text-yellow-500"
              />
              <BaseAvatar
                text="P"
                :rounded="rounded"
                size="sm"
                class="border-2 border-current !bg-indigo-500/20 !text-indigo-600"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>

      <div v-else-if="activeValue === 'masks'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Hex">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                rounded="none"
                mask="hex"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                rounded="none"
                mask="hex"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                rounded="none"
                mask="hex"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                rounded="none"
                mask="hex"
                size="sm"
              />
              <BaseAvatar
                text="J"
                rounded="none"
                mask="hex"
                size="sm"
                class="!bg-muted-900 !text-muted-100 dark:!bg-muted-100 dark:!text-muted-700"
              />
              <BaseAvatar
                text="A"
                rounded="none"
                mask="hex"
                size="sm"
                class="!bg-primary-500 !text-white"
              />
              <BaseAvatar
                text="F"
                rounded="none"
                mask="hex"
                size="sm"
                class="!bg-info-500 !text-white"
              />
              <BaseAvatar
                text="H"
                rounded="none"
                mask="hex"
                size="sm"
                class="!bg-success-500 !text-white"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Hexed">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                rounded="none"
                mask="hexed"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                rounded="none"
                mask="hexed"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                rounded="none"
                mask="hexed"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                rounded="none"
                mask="hexed"
                size="sm"
              />
              <BaseAvatar
                text="J"
                rounded="none"
                mask="hexed"
                size="sm"
                class="!bg-muted-900 !text-muted-100 dark:!bg-muted-100 dark:!text-muted-700"
              />
              <BaseAvatar
                text="A"
                rounded="none"
                mask="hexed"
                size="sm"
                class="!bg-primary-500 !text-white"
              />
              <BaseAvatar
                text="F"
                rounded="none"
                mask="hexed"
                size="sm"
                class="!bg-info-500 !text-white"
              />
              <BaseAvatar
                text="H"
                rounded="none"
                mask="hexed"
                size="sm"
                class="!bg-success-500 !text-white"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Blob">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                rounded="none"
                mask="blob"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                rounded="none"
                mask="blob"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                rounded="none"
                mask="blob"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                rounded="none"
                mask="blob"
                size="sm"
              />
              <BaseAvatar
                text="J"
                rounded="none"
                mask="blob"
                size="sm"
                class="!bg-muted-900 !text-muted-100 dark:!bg-muted-100 dark:!text-muted-700"
              />
              <BaseAvatar
                text="A"
                rounded="none"
                mask="blob"
                size="sm"
                class="!bg-primary-500 !text-white"
              />
              <BaseAvatar
                text="F"
                rounded="none"
                mask="blob"
                size="sm"
                class="!bg-info-500 !text-white"
              />
              <BaseAvatar
                text="H"
                rounded="none"
                mask="blob"
                size="sm"
                class="!bg-success-500 !text-white"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Deca">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                rounded="none"
                mask="deca"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                rounded="none"
                mask="deca"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                rounded="none"
                mask="deca"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                rounded="none"
                mask="deca"
                size="sm"
              />
              <BaseAvatar
                text="J"
                rounded="none"
                mask="deca"
                size="sm"
                class="!bg-muted-900 !text-muted-100 dark:!bg-muted-100 dark:!text-muted-700"
              />
              <BaseAvatar
                text="A"
                rounded="none"
                mask="deca"
                size="sm"
                class="!bg-primary-500 !text-white"
              />
              <BaseAvatar
                text="F"
                rounded="none"
                mask="deca"
                size="sm"
                class="!bg-info-500 !text-white"
              />
              <BaseAvatar
                text="H"
                rounded="none"
                mask="deca"
                size="sm"
                class="!bg-success-500 !text-white"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Diamond">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                rounded="none"
                mask="diamond"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                rounded="none"
                mask="diamond"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                rounded="none"
                mask="diamond"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                rounded="none"
                mask="diamond"
                size="sm"
              />
              <BaseAvatar
                text="J"
                rounded="none"
                mask="diamond"
                size="sm"
                class="!bg-muted-900 !text-muted-100 dark:!bg-muted-100 dark:!text-muted-700"
              />
              <BaseAvatar
                text="A"
                rounded="none"
                mask="diamond"
                size="sm"
                class="!bg-primary-500 !text-white"
              />
              <BaseAvatar
                text="F"
                rounded="none"
                mask="diamond"
                size="sm"
                class="!bg-info-500 !text-white"
              />
              <BaseAvatar
                text="H"
                rounded="none"
                mask="diamond"
                size="sm"
                class="!bg-success-500 !text-white"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>

      <div v-else-if="activeValue === 'sizes'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Image" label-align="end">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                src="/img/photo/avatars/51.jpg"
                :rounded="rounded"
                size="xxs"
              />
              <BaseAvatar
                src="/img/photo/avatars/19.jpg"
                :rounded="rounded"
                size="xs"
              />
              <BaseAvatar
                src="/img/photo/avatars/25.jpg"
                :rounded="rounded"
                size="sm"
              />
              <BaseAvatar
                src="/img/photo/avatars/17.jpg"
                :rounded="rounded"
                size="md"
              />
              <BaseAvatar
                src="/img/photo/avatars/30.jpg"
                :rounded="rounded"
                size="lg"
              />
              <BaseAvatar
                src="/img/photo/avatars/29.jpg"
                :rounded="rounded"
                size="xl"
              />
              <BaseAvatar
                src="/img/photo/avatars/33.jpg"
                :rounded="rounded"
                size="2xl"
              />
              <BaseAvatar
                src="/img/photo/avatars/57.jpg"
                :rounded="rounded"
                size="3xl"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Fallback" label-align="end">
            <div class="flex flex-wrap items-end gap-3">
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="xxs"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="xs"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="sm"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="md"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="lg"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="xl"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="2xl"
                class="bg-primary-500/20 text-primary-600"
              />
              <BaseAvatar
                text="H"
                :rounded="rounded"
                size="3xl"
                class="bg-primary-500/20 text-primary-600"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
