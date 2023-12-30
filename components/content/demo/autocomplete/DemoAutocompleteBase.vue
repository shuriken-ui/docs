<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="fields.first"
          :items="frameworks"
          rounded="sm"
          label="Framework"
          placeholder="Ex: javascript"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
