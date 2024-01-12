<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex max-w-3xl flex-wrap items-end gap-3">
        <div class="flex-1">
          <BaseInput
            v-model="fields.first"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
          />
        </div>

        <div class="flex-1">
          <BaseInput
            v-model="fields.second"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
          />
        </div>

        <div class="flex-1">
          <BaseInput
            v-model="fields.third"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
})
</script>
