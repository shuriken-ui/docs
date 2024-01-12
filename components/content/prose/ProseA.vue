<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="px-1 text-primary-800 underline-offset-4 hover:underline dark:text-primary-500"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>
