<script setup lang="ts">
const props = defineProps<{
  overflowHidden?: boolean
}>()
</script>

<template>
  <section class="relative bg-white px-4 py-12 dark:bg-muted-900 sm:py-16 md:px-6 lg:py-20 xl:py-24" :class="[props.overflowHidden ? 'overflow-hidden' : '']">
    <div class="mx-auto w-full max-w-7xl">
      <slot />
    </div>
  </section>
</template>
