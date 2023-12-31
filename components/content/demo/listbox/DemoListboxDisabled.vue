<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="max-w-xs">
        <BaseListbox
          v-model="value"
          :items="frameworks"
          label="Framework"
          size="md"
          placeholder="Select a framework"
          rounded="sm"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
