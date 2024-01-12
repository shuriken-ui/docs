<script setup lang="ts">
const props = defineProps<{
  icon?: string | boolean
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'muted' | undefined
}>()
</script>

<template>
  <div class="py-6">
    <BaseMessage
      :type="props.type"
      :icon="props.icon ? props.icon : false"
      rounded="md"
    >
      <ContentSlot :use="$slots.default" unwrap="p" />
    </BaseMessage>
  </div>
</template>
