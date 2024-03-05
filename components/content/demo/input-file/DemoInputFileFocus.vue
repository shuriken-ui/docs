<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseInputFile
            v-model="file"
            rounded="md"
            label="Upload a file"
            color-focus
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const file = ref<FileList | null>(null)
</script>
