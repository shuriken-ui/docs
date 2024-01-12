<template>
  <div class="flex items-center p-4">
    <BaseSwitchThin
      v-model="value"
      label="Label"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(true)
</script>
