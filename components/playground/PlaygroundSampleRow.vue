<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    labelAlign?: 'start' | 'center' | 'end'
  }>(),
  {
    labelAlign: 'center',
  },
)
</script>

<template>
  <div class="relative z-0 grid grid-cols-12 gap-6">
    <div class="col-span-12 md:col-span-1">
      <div class="flex h-full" :class="[props.labelAlign === 'start' ? 'items-start' : '', props.labelAlign === 'center' ? 'items-center' : '', props.labelAlign === 'end' ? 'items-end' : '']">
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          {{ props.label }}
        </BaseParagraph>
      </div>
    </div>
    <div class="col-span-12 md:col-span-11">
      <slot />
    </div>
  </div>
</template>
