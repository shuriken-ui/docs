<script setup lang="ts">
const props = defineProps<{
  icon?: string | boolean
  color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined
}>()
</script>

<template>
  <div class="py-6">
    <BaseMessage
      :color="props.color"
      :icon="props.icon ? props.icon : false"
      rounded="md"
    >
      <ContentSlot :use="$slots.default" unwrap="p" />
    </BaseMessage>
  </div>
</template>
