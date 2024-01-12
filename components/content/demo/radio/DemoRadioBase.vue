<template>
  <div class="flex items-center gap-8 p-4">
    <BaseRadio
      v-model="value"
      name="checkbox_base"
      label="Option 1"
      value="Option 1"
    />
    <BaseRadio
      v-model="value"
      name="checkbox_base"
      label="Option 2"
      value="Option 2"
    />
    <BaseRadio
      v-model="value"
      name="checkbox_base"
      value="Option 3"
      label="Option 3"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('Option 1')
</script>
