<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center w-full">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInputNumber
            v-model="fields.first"
            rounded="md"
            label="Your rating"
            icon-increment="lucide:chevron-right"
            icon-decrement="lucide:chevron-left"
            icon="lucide:star"
            :min="0"
            :max="5"
          />

          <BaseInputNumber
            v-model="fields.second"
            rounded="md"
            label="Priority"
            icon-increment="lucide:alarm-plus"
            icon-decrement="lucide:alarm-minus"
            icon="lucide:bell"
            :min="0"
            :max="5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: undefined as number | undefined,
  second: undefined as number | undefined,
})
</script>