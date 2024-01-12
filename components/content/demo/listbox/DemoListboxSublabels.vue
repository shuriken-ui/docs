<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseListbox
          v-model="value"
          size="md"
          rounded="md"
          label="People"
          :items="people"
          :properties="{
            value: 'id',
            label: 'name',
            sublabel: 'text',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 3,
  name: 'Mike Miller',
  text: 'UI/UX Designer',
})

const people = ref([
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
  },
])
</script>
