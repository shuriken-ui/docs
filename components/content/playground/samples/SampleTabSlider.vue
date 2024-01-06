<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="double-slot"
    :tabs="[
      { label: '2 slots', value: 'double-slot' },
      { label: '3 slots', value: 'triple-slot' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'double-slot'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'triple-slot'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
    </template>
  </BaseTabs>
</template>