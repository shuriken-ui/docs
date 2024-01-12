<script setup lang="ts">
const props = defineProps<{
  classes?: string
}>()
</script>

<template>
  <div class="inline-flex h-10 flex-1 shrink-0 items-center justify-center rounded-md px-3 text-sm" :class="classes">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
