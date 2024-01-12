<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseListbox
          v-model="value"
          size="md"
          rounded="sm"
          label="Hobbies"
          :items="hobbies"
          :properties="{
            value: 'id',
            label: 'name',
            sublabel: 'text',
            icon: 'icon',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 2,
  name: 'Travel',
  text: 'Tourism & travel',
  icon: 'ph:airplane-duotone',
})

const hobbies = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
]
</script>
