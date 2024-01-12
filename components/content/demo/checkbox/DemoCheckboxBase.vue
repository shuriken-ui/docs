<template>
  <div class="flex items-center p-4">
    <BaseCheckbox
      v-model="value"
      label="Checkbox"
      rounded="sm"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
