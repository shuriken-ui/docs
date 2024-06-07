<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="variants"
    :tabs="[
      { label: 'Variants', value: 'variants' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Icons', value: 'icons' },
      { label: 'Shadows', value: 'shadows' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'variants'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Solid">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton :rounded="rounded" variant="solid">
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="muted"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="primary"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="success"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="info"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="warning"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="danger"
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Pastel">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton :rounded="rounded" variant="pastel">
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="muted"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="primary"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="success"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="info"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="warning"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="danger"
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Outline">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton :rounded="rounded" variant="outline">
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="muted"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="primary"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="success"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="info"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="warning"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="danger"
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Mono">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="dark"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="black"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="dark"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="black"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="dark"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="black"
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Sizes" label-align="end">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButton size="sm" :rounded="rounded">
                Button
              </BaseButton>
              <BaseButton size="md" :rounded="rounded">
                Button
              </BaseButton>
              <BaseButton size="lg" :rounded="rounded">
                Button
              </BaseButton>
              <BaseButton size="xl" :rounded="rounded">
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'icons'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Solid">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="default"
              >
                <Icon name="lucide:moon" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="primary"
              >
                <span>Button</span>
                <Icon name="lucide:arrow-right" class="me-1 h-4 w-4" />
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="success"
              >
                <Icon name="cib:circleci" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="info"
              >
                <Icon name="fa:twitter" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="warning"
              >
                <Icon name="ion:shapes" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                color="danger"
              >
                <Icon name="mingcute:heart-fill" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Pastel">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="default"
              >
                <Icon name="lucide:moon" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="primary"
              >
                <span>Button</span>
                <Icon name="lucide:arrow-right" class="me-1 h-4 w-4" />
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="success"
              >
                <Icon name="cib:circleci" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="info"
              >
                <Icon name="fa:twitter" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="warning"
              >
                <Icon name="ion:shapes" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="pastel"
                color="danger"
              >
                <Icon name="mingcute:heart-fill" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Outline">
            <div class="flex flex-wrap items-end gap-2">
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="default"
              >
                <Icon name="lucide:moon" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="primary"
              >
                <span>Button</span>
                <Icon name="lucide:arrow-right" class="me-1 h-4 w-4" />
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="success"
              >
                <Icon name="cib:circleci" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="info"
              >
                <Icon name="fa:twitter" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="warning"
              >
                <Icon name="ion:shapes" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="outline"
                color="danger"
              >
                <Icon name="mingcute:heart-fill" class="-ms-1 h-4 w-4" />
                <span>Button</span>
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'shadows'" class="relative pb-4">
        <div class="relative">
          <PlaygroundSampleRow label="Flat" label-align="start">
            <div class="flex flex-wrap items-end gap-2 pb-8">
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
                color="muted"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
                color="primary"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
                color="success"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
                color="info"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
                color="warning"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="flat"
                color="danger"
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Hover" label-align="start">
            <div class="flex flex-wrap items-end gap-2 pb-8">
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
                color="muted"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
                color="primary"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
                color="success"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
                color="info"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
                color="warning"
              >
                Button
              </BaseButton>
              <BaseButton
                :rounded="rounded"
                variant="solid"
                shadow="hover"
                color="danger"
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-6">
          <PlaygroundSampleRow label="Badge" label-align="end">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButton
                size="sm"
                :rounded="rounded"
                badge
                badge-pulse
              >
                Button
              </BaseButton>
              <BaseButton
                size="md"
                :rounded="rounded"
                badge
                badge-pulse
              >
                Button
              </BaseButton>
              <BaseButton
                size="lg"
                :rounded="rounded"
                badge
                badge-pulse
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Loading" label-align="end">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButton
                size="sm"
                :rounded="rounded"
                loading
              >
                Button
              </BaseButton>
              <BaseButton
                size="md"
                :rounded="rounded"
                loading
              >
                Button
              </BaseButton>
              <BaseButton
                size="lg"
                :rounded="rounded"
                loading
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="end">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButton
                size="sm"
                :rounded="rounded"
                disabled
              >
                Button
              </BaseButton>
              <BaseButton
                size="md"
                :rounded="rounded"
                disabled
              >
                Button
              </BaseButton>
              <BaseButton
                size="lg"
                :rounded="rounded"
                disabled
              >
                Button
              </BaseButton>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
