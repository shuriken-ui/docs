<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Thickness', value: 'thickness' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="center">
            <div class="flex items-end gap-2">
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="55"
                :value="65"
                color="primary"
              />
              <BaseProgressCircle
                title="Yellow circle progress bar"
                :size="55"
                :value="65"
                color="warning"
              />
              <BaseProgressCircle
                title="Pink circle progress bar"
                :size="55"
                :value="65"
                color="success"
              />
              <BaseProgressCircle
                title="Indigo circle progress bar"
                :size="55"
                :value="65"
                color="info"
              />
              <BaseProgressCircle
                title="Pink circle progress bar"
                :size="55"
                :value="65"
                color="danger"
              />
              <BaseProgressCircle
                title="Pink circle progress bar"
                :size="55"
                :value="65"
                color="dark"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="end">
            <div class="flex items-end gap-2">
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="45"
                :value="65"
                class="text-primary-500"
              />
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="55"
                :value="65"
                class="text-primary-500"
              />
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="65"
                :value="65"
                class="text-primary-500"
              />
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="75"
                :value="65"
                class="text-primary-500"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'thickness'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="end">
            <div class="flex items-end gap-2">
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="45"
                :thickness="2"
                :value="65"
                class="text-primary-500"
              />
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="55"
                :thickness="2"
                :value="65"
                class="text-primary-500"
              />
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="65"
                :thickness="2"
                :value="65"
                class="text-primary-500"
              />
              <BaseProgressCircle
                title="Primary circle progress bar"
                :size="75"
                :thickness="2"
                :value="65"
                class="text-primary-500"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
