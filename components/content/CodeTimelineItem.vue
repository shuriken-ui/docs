<script setup lang="ts">
const props = defineProps<{
  step?: number
}>()
</script>

<template>
  <li class="dark:before:highlight-white/5 relative ms-1 grid-cols-5 gap-16 pb-8 pl-9 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-muted-700 before:shadow-sm before:ring-1 before:ring-muted-900/5 before:content-[counter(step)] after:absolute after:bottom-0 after:left-[0.6875rem] after:top-[calc(1.875rem+1px)] after:w-px after:bg-muted-200 dark:before:bg-muted-950 dark:before:text-muted-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-muted-200/5 xl:grid" :style="`counter-increment: step ${props.step ?? 1};`">
    <div class="col-span-2 mb-6 xl:mb-0">
      <h3 class="mb-2 text-sm font-semibold leading-6 text-muted-900 dark:text-muted-200">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <div class="text-sm">
        <p><ContentSlot :use="$slots.description" unwrap="p" /></p>
      </div>
    </div>
    <div class="relative z-10 col-span-3 -ml-10 xl:ml-0">
      <div class="-mt-6">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>
  </li>
</template>
