<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseInputNumber
            v-model="value"
            contrast="default-contrast"
            size="md"
            rounded="md"
            label="Quantity"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref(0)
</script>
