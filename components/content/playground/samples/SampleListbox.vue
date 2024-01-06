<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="contrasts"
    :tabs="[
      { label: 'Contrasts', value: 'contrasts' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Media', value: 'media' },
      { label: 'Label', value: 'label' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'contrasts'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'media'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'shadows'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
        </div>
      </div>
    </template>
  </BaseTabs>
</template>