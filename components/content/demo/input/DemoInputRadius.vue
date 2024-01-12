<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseInput
          v-model="value"
          rounded="full"
          label="Username"
          placeholder="Ex: username"
          :classes="{
            wrapper: 'w-full',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
