<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="w-full max-w-xs flex items-end gap-4">
          <BaseInputFile v-model="file" rounded="md" label="Upload a file" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const file = ref<FileList | null>(null)
</script>
