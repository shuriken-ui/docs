<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex max-w-3xl flex-col items-end gap-3 md:flex-row">
        <div class="flex-1">
          <BaseAutocomplete
            v-model="fields.first"
            :items="frameworks"
            size="md"
            rounded="md"
            label="Framework"
            placeholder="Ex: javascript"
            disabled
          />
        </div>

        <div class="flex-1">
          <BaseAutocomplete
            v-model="fields.second"
            :items="frameworks"
            icon="lucide:search"
            size="md"
            rounded="md"
            label="Framework"
            placeholder="Ex: javascript"
            disabled
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
