<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex max-w-3xl flex-col items-end gap-3 md:flex-row">
        <div class="flex-1">
          <BaseInput
            v-model="fields.first"
            rounded="sm"
            label="Username"
            placeholder="Ex: username"
            label-float
            :classes="{
              wrapper: 'w-full',
            }"
          />
        </div>

        <div class="flex-1">
          <BaseInput
            v-model="fields.second"
            icon="lucide:search"
            rounded="sm"
            label="Username"
            placeholder="Ex: username"
            label-float
            :classes="{
              wrapper: 'w-full',
            }"
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
})
</script>
