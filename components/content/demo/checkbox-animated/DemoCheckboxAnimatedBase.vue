<template>
  <div class="flex items-center p-4">
    <BaseCheckboxAnimated
      v-model="option"
      value="Option 1"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const option = ref('Option 1')
</script>
