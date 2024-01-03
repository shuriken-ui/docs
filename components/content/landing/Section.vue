<script setup lang="ts">
const props = defineProps<{
  overflowHidden?: boolean
}>()
</script>

<template>
  <section class="relative py-12 bg-white dark:bg-muted-900 sm:py-16 lg:py-20 xl:py-24 px-4 md:px-6" :class="[props.overflowHidden ? 'overflow-hidden' : '']">
    <div class="w-full mx-auto max-w-7xl">
      <slot />
    </div>
  </section>
</template>
