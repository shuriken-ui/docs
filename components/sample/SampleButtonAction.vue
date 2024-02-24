<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Colors" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonAction :rounded="rounded" color="default">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="muted">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="primary">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="info">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="success">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="warning">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="danger">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="dark">
                Action
              </BaseButtonAction>
              <BaseButtonAction :rounded="rounded" color="black">
                Action
              </BaseButtonAction>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Loading" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="default"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="muted"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="primary"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="info"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="success"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="warning"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                loading
                color="danger"
              >
                Action
              </BaseButtonAction>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="default"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="muted"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="primary"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="info"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="success"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="warning"
              >
                Action
              </BaseButtonAction>
              <BaseButtonAction
                :rounded="rounded"
                disabled
                color="danger"
              >
                Action
              </BaseButtonAction>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
