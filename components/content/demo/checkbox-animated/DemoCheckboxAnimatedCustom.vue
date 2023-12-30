<template>
  <div class="flex items-center p-4">
    <BaseCheckboxAnimated
      v-model="customValue"
      :true-value="'checked'"
      :false-value="'not-checked'"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const customValue = ref()
</script>
