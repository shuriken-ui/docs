<template>
  <div class="flex items-center p-4">
    <BaseCheckboxAnimated
      v-model="checked"
      value="Option 1"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const checked = ref(false)
</script>
