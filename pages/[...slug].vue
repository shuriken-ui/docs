<script setup lang="ts">
const { page } = useContent()

useContentHead(page)
</script>

<template>
  <ContentRenderer :key="page._id" :value="page" />
</template>
