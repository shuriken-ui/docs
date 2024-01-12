<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'Sizes', value: 'sizes' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="center">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="default"
              />
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="muted"
              />
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="primary"
              />
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="info"
              />
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="success"
              />
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="warning"
              />
              <BaseButtonClose
                :rounded="rounded"
                size="sm"
                color="danger"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="end">
            <div class="flex flex-wrap items-end gap-4">
              <BaseButtonClose
                size="xs"
                :rounded="rounded"
                color="muted"
              />
              <BaseButtonClose
                size="sm"
                :rounded="rounded"
                color="muted"
              />
              <BaseButtonClose
                size="md"
                :rounded="rounded"
                color="muted"
              />
              <BaseButtonClose
                size="lg"
                :rounded="rounded"
                color="muted"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
