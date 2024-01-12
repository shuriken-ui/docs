<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseSelect
            v-model="value"
            rounded="sm"
            label="Select Hero"
            :classes="{
              wrapper: 'w-full',
            }"
            disabled
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
