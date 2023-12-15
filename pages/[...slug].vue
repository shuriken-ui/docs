<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <ContentRenderer :key="page._id" :value="page" />
</template>