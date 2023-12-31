<template>
  <div class="flex items-center gap-8 p-4">
    <BaseCheckbox
      v-model="options.first"
      label="Label"
      rounded="none"
    />
    <BaseCheckbox
      v-model="options.second"
      label="Label"
      rounded="sm"
    />
    <BaseCheckbox
      v-model="options.third"
      label="Label"
      rounded="md"
    />
    <BaseCheckbox
      v-model="options.fourth"
      label="Label"
      rounded="lg"
    />
    <BaseCheckbox
      v-model="options.fifth"
      label="Label"
      rounded="full"
    />
  </div>
</template>

<script setup lang="ts">
const options = reactive({
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
})
</script>
