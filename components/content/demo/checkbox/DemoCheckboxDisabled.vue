<template>
  <div class="flex items-center p-4">
    <BaseCheckbox
      v-model="value"
      label="Disabled"
      rounded="sm"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
