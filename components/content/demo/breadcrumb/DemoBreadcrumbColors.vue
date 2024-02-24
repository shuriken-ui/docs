<template>
  <div class="flex flex-col space-y-2 px-4 pt-4">
    <BaseBreadcrumb :items="breadcrumb" color="primary">
      /
    </BaseBreadcrumb>
    <BaseBreadcrumb :items="breadcrumb" color="dark">
      /
    </BaseBreadcrumb>
    <BaseBreadcrumb :items="breadcrumb" color="black">
      /
    </BaseBreadcrumb>
  </div>
</template>

<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
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
