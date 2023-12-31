<template>
  <div class="flex items-center gap-8 p-4">
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-1"
      label="Option 1"
      value="Option 1"
      rounded="lg"
    />
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-2"
      label="Option 2"
      value="Option 2"
      rounded="lg"
    />
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-3"
      label="Option 3"
      value="Option 3"
      rounded="lg"
    />
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-4"
      label="Option 4"
      value="Option 4"
      rounded="lg"
    />
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-5"
      label="Option 5"
      value="Option 5"
      rounded="lg"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(['Option 1', 'Option 2'])
</script>
