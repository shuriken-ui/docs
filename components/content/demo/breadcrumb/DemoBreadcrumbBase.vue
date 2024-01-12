<template>
  <div class="flex items-center px-4 pt-4">
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />
  </div>
</template>

<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]
</script>
