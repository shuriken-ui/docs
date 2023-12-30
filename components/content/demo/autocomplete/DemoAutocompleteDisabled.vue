<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="flex flex-col md:flex-row max-w-3xl items-end gap-3">
        <div class="flex-1">
          <BaseAutocomplete v-model="fields.first" :items="frameworks" size="md" rounded="md" label="Framework" placeholder="Ex: javascript" disabled />
        </div>

        <div class="flex-1">
          <BaseAutocomplete v-model="fields.second" :items="frameworks" icon="lucide:search" size="md" rounded="md" label="Framework" placeholder="Ex: javascript" disabled />
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
