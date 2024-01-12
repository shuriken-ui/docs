<script setup lang="ts">
const props = defineProps<{
  classes?: string
}>()
</script>

<template>
  <div class="h-10 px-3 flex-1 shrink-0 inline-flex items-center justify-center text-sm rounded-md" :class="classes">
    <ContentSlot :use="$slots.default" unwrap="p"></ContentSlot>
  </div>
</template>
