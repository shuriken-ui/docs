<template>
  <div class="flex items-center p-4">
    <BaseSwitchBall
      v-model="value"
      label="Primary"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(true)
</script>
