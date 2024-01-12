<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseInput
            v-model="value"
            rounded="sm"
            label="Username"
            placeholder="Ex: username"
            :classes="{
              wrapper: 'w-full',
            }"
          >
            <template #action>
              <button
                type="button"
                data-nui-tooltip="Save"
                class="absolute end-0 top-0 z-[1] flex h-10 w-10 items-center justify-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
              >
                <Icon name="lucide:save" class="h-4 w-4" />
              </button>
            </template>
          </BaseInput>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
