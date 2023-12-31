<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="w-full max-w-xs flex items-end gap-4">
          <BaseSelect
            v-model="value"
            rounded="sm"
            label="Select Hero"
            :classes="{
              wrapper: 'w-full',
            }"
            loading
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