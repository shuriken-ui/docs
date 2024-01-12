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
        <div class="space-y-6">
          <PlaygroundSampleRow label="Light" label-align="center">
            <div class="flex items-center gap-4">
              <BaseSnack label="Label" color="default" />
              <BaseSnack
                icon="logos:react"
                label="React"
                color="default"
              />
              <BaseSnack
                image="/img/photo/avatars/30.jpg"
                label="Label"
                color="default"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted" label-align="center">
            <div class="flex items-center gap-4">
              <BaseSnack label="Label" color="muted" />
              <BaseSnack
                icon="logos:react"
                label="React"
                color="muted"
              />
              <BaseSnack
                image="/img/photo/avatars/30.jpg"
                label="Label"
                color="muted"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Light" label-align="end">
            <div class="flex items-end gap-4">
              <BaseSnack
                label="Label"
                color="default"
                size="xs"
              />
              <BaseSnack
                label="Label"
                color="default"
                size="sm"
              />
              <BaseSnack
                label="Label"
                color="default"
                size="md"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted" label-align="end">
            <div class="flex items-end gap-4">
              <BaseSnack
                label="Label"
                color="muted"
                size="xs"
              />
              <BaseSnack
                label="Label"
                color="muted"
                size="sm"
              />
              <BaseSnack
                label="Label"
                color="muted"
                size="md"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
