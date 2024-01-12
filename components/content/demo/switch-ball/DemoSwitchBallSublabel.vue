<template>
  <div class="flex items-center p-4">
    <BaseSwitchBall
      v-model="value"
      label="Primary"
      sublabel="This is a primary switch"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(true)
</script>
