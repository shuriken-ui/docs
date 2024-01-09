<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="flex max-w-2xl flex-wrap items-end gap-3">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              size="sm"
              rounded="md"
              label="Size: sm"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              size="md"
              rounded="md"
              label="Size: md"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="lg"
              rounded="md"
              label="Size: lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
})
</script>