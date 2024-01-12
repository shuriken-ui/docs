<script setup lang="ts">
const props = defineProps<{
  heading?: boolean
  spaced?: boolean
  level?: '1' | '2' | '3'
}>()
</script>

<template>
  <li
    class="relative flex items-start before:me-3 before:mt-2 before:flex before:h-2 before:w-2 before:shrink-0 before:rounded-full before:border-2 before:content-[''] [&>p]:!text-sm [&>p]:!leading-relaxed"
    :class="[
      props.heading ? '[&>p]:!font-medium' : '',
      props.spaced ? 'pt-3' : '',
      !props.level || props.level === '1' ? 'before:border-primary-800' : '',
      props.level === '2' && 'ps-6 text-sm before:border-primary-500',
      props.level === '3' && 'ps-12 text-sm before:border-muted-500 dark:before:border-muted-400'
    ]"
  >
    <ContentSlot :use="$slots.default" />
  </li>
</template>
