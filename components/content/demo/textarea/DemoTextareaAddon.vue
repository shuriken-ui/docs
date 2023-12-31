<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="w-full max-w-sm flex items-center">
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            :rows="6"
            addon
            :classes="{
              wrapper: 'w-full',
              textarea: 'resize-none overflow-hidden',
            }"
          >
            <template #addon>
              <div class="flex items-center gap-2">
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  class="me-1"
                  size="xs"
                />

                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Maya
                </BaseHeading>
              </div>

              <div class="flex items-center gap-2">
                <BaseButton size="sm">
                  Post Comment
                </BaseButton>
              </div>
            </template>
          </BaseTextarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
