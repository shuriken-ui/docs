<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent().where({ 'tabs.title': { $exists: true } }).only(['tabs', '_path']).find())
</script>

<template>
  <div>
    <!-- <pre>{{ data }}</pre> -->
    <slot />
    <ThemeSwitcher />
  </div>
</template>
