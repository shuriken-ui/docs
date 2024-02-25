<template>
  <div class="flex items-center gap-4 p-4">
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 1"
      color="primary"
    />
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 2"
      color="info"
    />
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 3"
      color="success"
    />
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 4"
      color="warning"
    />
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 5"
      color="danger"
    />
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 6"
      color="dark"
    />
    <BaseCheckboxAnimated
      v-model="options"
      value="Option 7"
      color="black"
    />
  </div>
</template>

<script setup lang="ts">
const options = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
])
</script>
