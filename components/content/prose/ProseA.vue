<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-primary-800 dark:text-primary-500 hover:underline underline-offset-4 px-1"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>