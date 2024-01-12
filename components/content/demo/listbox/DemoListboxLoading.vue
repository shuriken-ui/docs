<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseListbox
          v-model="value"
          :items="frameworks"
          label="Framework"
          size="md"
          placeholder="Select a framework"
          rounded="sm"
          loading
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
