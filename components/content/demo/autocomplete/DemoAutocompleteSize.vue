<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="flex max-w-3xl flex-wrap items-end gap-3">
        <div class="flex-1">
          <BaseAutocomplete
            v-model="fields.first"
            :items="frameworks"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: javascript"
          />
        </div>

        <div class="flex-1">
          <BaseAutocomplete
            v-model="fields.second"
            :items="frameworks"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: javascript"
          />
        </div>

        <div class="flex-1">
          <BaseAutocomplete
            v-model="fields.third"
            :items="frameworks"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: javascript"
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
