<template>
  <div class="flex items-center p-4">
    <BaseCheckbox
      v-model="value"
      name="true-false"
      :label="value"
      :true-value="'checked'"
      :false-value="'not-checked'"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('not-checked')
</script>
