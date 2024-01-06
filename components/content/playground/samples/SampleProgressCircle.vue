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
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'thickness'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
    </template>
  </BaseTabs>
</template>