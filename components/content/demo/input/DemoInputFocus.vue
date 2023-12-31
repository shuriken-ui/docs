<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="w-full max-w-xs flex items-end gap-4">
          <BaseInput
            v-model="value"
            icon="lucide:search"
            rounded="sm"
            label="Username"
            placeholder="Ex: username"
            color-focus
            :classes="{
              wrapper: 'w-full',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>