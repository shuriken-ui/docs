<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="w-full max-w-sm flex items-center">
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="sm"
            placeholder="Write a message..."
            rows="4"
            :classes="{
              wrapper: 'w-full',
              textarea: 'resize-none overflow-hidden',
            }"
            autogrow
            loading
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
