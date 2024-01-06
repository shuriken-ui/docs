<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="icons"
    :tabs="[
      { label: 'Colors', value: 'icons' },
      { label: 'Item icon', value: 'item-icon' },
      { label: 'Item media', value: 'item-media' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'icons'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'item-icon'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'item-media'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
    </template>
  </BaseTabs>
</template>