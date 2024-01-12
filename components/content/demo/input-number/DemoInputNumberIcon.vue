<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
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
