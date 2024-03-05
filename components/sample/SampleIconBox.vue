<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="variants"
    :tabs="[
      { label: 'Variants', value: 'variants' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Masks', value: 'masks' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'variants'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Solid">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="solid"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Pastel">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="pastel"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Outline">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                variant="outline"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Sizes" label-align="end">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="xs"
                :rounded="rounded"
                color="default"
                class="border border-muted-200 bg-white text-muted-500 dark:border-muted-600 dark:bg-muted-700"
              >
                <Icon name="ph:nut-duotone" class="h-3 w-3" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                :rounded="rounded"
                color="default"
                class="border border-muted-200 bg-white text-muted-500 dark:border-muted-600 dark:bg-muted-700"
              >
                <Icon name="ph:nut-duotone" class="h-4 w-4" />
              </BaseIconBox>
              <BaseIconBox
                size="md"
                :rounded="rounded"
                color="default"
                class="border border-muted-200 bg-white text-muted-500 dark:border-muted-600 dark:bg-muted-700"
              >
                <Icon name="ph:nut-duotone" class="h-4 w-4" />
              </BaseIconBox>
              <BaseIconBox
                size="lg"
                :rounded="rounded"
                color="default"
                class="border border-muted-200 bg-white text-muted-500 dark:border-muted-600 dark:bg-muted-700"
              >
                <Icon name="ph:nut-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="xl"
                :rounded="rounded"
                color="default"
                class="border border-muted-200 bg-white text-muted-500 dark:border-muted-600 dark:bg-muted-700"
              >
                <Icon name="ph:nut-duotone" class="h-6 w-6" />
              </BaseIconBox>
              <BaseIconBox
                size="2xl"
                :rounded="rounded"
                color="default"
                class="border border-muted-200 bg-white text-muted-500 dark:border-muted-600 dark:bg-muted-700"
              >
                <Icon name="ph:nut-duotone" class="h-6 w-6" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'masks'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Hex">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hex"
                variant="solid"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Hexed">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="hexed"
                variant="pastel"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Blob">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="blob"
                variant="solid"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Deca">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="deca"
                variant="pastel"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Diamond">
            <div class="flex flex-wrap items-end gap-3">
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="default"
              >
                <Icon name="ph:buildings-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="info"
              >
                <Icon name="ph:cookie-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="success"
              >
                <Icon name="ph:leaf-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="warning"
              >
                <Icon name="ph:storefront-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="danger"
              >
                <Icon name="ph:skull-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="dark"
              >
                <Icon name="ph:bell-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <BaseIconBox
                size="sm"
                rounded="none"
                mask="diamond"
                variant="solid"
                color="black"
              >
                <Icon name="ph:spade-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
