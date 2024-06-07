<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonIcon :rounded="rounded" color="default">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="muted">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="primary">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="info">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="success">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="warning">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="danger">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="dark">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon :rounded="rounded" color="black">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="end">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonIcon size="sm" rounded="md">
                <Icon name="ph:game-controller-duotone" class="h-4 w-4" />
              </BaseButtonIcon>
              <BaseButtonIcon size="md" rounded="md">
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon size="lg" rounded="md">
                <Icon name="ph:game-controller-duotone" class="h-6 w-6" />
              </BaseButtonIcon>
              <BaseButtonIcon size="xl" rounded="md">
                <Icon name="ph:game-controller-duotone" class="h-6 w-6" />
              </BaseButtonIcon>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Loading" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="default"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="muted"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="info"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="success"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="warning"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                loading
                :rounded="rounded"
                color="danger"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="default"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="muted"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="primary"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="info"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="success"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="warning"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
              <BaseButtonIcon
                disabled
                :rounded="rounded"
                color="danger"
              >
                <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
              </BaseButtonIcon>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
