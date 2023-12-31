<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="w-full max-w-xs flex items-end gap-4">
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
                class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex h-10 w-10 items-center justify-center transition-colors duration-300"
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