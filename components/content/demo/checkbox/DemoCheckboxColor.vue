<template>
  <div class="flex items-center gap-8 p-4">
    <BaseCheckbox
      v-model="options.first"
      label="Label"
      rounded="sm"
      color="default"
    />
    <BaseCheckbox
      v-model="options.second"
      label="Label"
      rounded="sm"
      color="muted"
    />
    <BaseCheckbox
      v-model="options.third"
      label="Label"
      rounded="sm"
      color="primary"
    />
    <BaseCheckbox
      v-model="options.fourth"
      label="Label"
      rounded="sm"
      color="info"
    />
    <BaseCheckbox
      v-model="options.fifth"
      label="Label"
      rounded="sm"
      color="success"
    />
    <BaseCheckbox
      v-model="options.sixth"
      label="Label"
      rounded="sm"
      color="warning"
    />
    <BaseCheckbox
      v-model="options.seventh"
      label="Label"
      rounded="sm"
      color="danger"
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
  sixth: true,
  seventh: true,
})
</script>
