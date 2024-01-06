<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="weights"
    :tabs="[
      { label: 'Weights', value: 'weights' },
      { label: 'Sizes', value: 'sizes' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'weights'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
    </template>
  </BaseTabs>
</template>