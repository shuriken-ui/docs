<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="flex flex-col md:flex-row max-w-3xl items-end gap-3">
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
