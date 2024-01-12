<template>
  <div class="flex flex-wrap items-center gap-8 p-4">
    <BaseRadio
      v-model="value"
      name="radio_base"
      label="Option 2"
      value="Option 2"
      color="muted"
    />
    <BaseRadio
      v-model="value"
      name="radio_base"
      value="Option 3"
      label="Option 3"
      color="primary"
    />
    <BaseRadio
      v-model="value"
      name="radio_base"
      value="Option 4"
      label="Option 4"
      color="info"
    />
    <BaseRadio
      v-model="value"
      name="radio_base"
      value="Option 5"
      label="Option 5"
      color="success"
    />
    <BaseRadio
      v-model="value"
      name="radio_base"
      value="Option 6"
      label="Option 6"
      color="warning"
    />
    <BaseRadio
      v-model="value"
      name="radio_base"
      value="Option 7"
      label="Option 7"
      color="danger"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('Option 2')
</script>
