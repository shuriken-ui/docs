<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref()

const fields = reactive({
  first: '',
  second: '',
  third: '',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])

const hobbyValue = ref({
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

const peopleValue = ref({
  id: 2,
  name: 'Aaron Splatter',
  text: 'Project Manager',
  media: '/img/avatars/16.svg',
})

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseTabs
    model-value="contrasts"
    :tabs="[
      { label: 'Contrasts', value: 'contrasts' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Media', value: 'media' },
      { label: 'Label', value: 'label' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'contrasts'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow
            label="Default"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="w-full max-w-xs">
              <BaseListbox
                v-model="value"
                :items="frameworks"
                contrast="default"
                label="Framework"
                size="md"
                placeholder="Select a framework"
                :rounded="rounded"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Contrast"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="w-full max-w-xs">
              <BaseListbox
                v-model="value"
                :items="frameworks"
                contrast="default-contrast"
                label="Framework"
                size="md"
                placeholder="Select a framework"
                :rounded="rounded"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Muted"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="w-full max-w-xs">
              <BaseListbox
                v-model="value"
                :items="frameworks"
                contrast="muted"
                label="Framework"
                size="md"
                placeholder="Select a framework"
                :rounded="rounded"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Contrast"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="w-full max-w-xs">
              <BaseListbox
                v-model="value"
                :items="frameworks"
                contrast="muted-contrast"
                label="Framework"
                size="md"
                placeholder="Select a framework"
                :rounded="rounded"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow
            label="Default"
            label-align="end"
            class="relative focus-within:z-[2]"
          >
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'media'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow
            label="Sublabel"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="max-w-xs">
              <BaseListbox
                v-model="peopleValue"
                size="md"
                :rounded="rounded"
                label="People"
                :items="people"
                :properties="{
                  value: 'id',
                  label: 'name',
                  sublabel: 'text',
                }"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Icon"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="max-w-xs">
              <BaseListbox
                v-model="hobbyValue"
                size="md"
                :rounded="rounded"
                label="Hobbies"
                :items="hobbies"
                :properties="{
                  value: 'id',
                  label: 'name',
                  sublabel: 'text',
                  icon: 'icon',
                }"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Image"
            label-align="center"
            class="relative focus-within:z-[2]"
          >
            <div class="max-w-xs">
              <BaseListbox
                v-model="peopleValue"
                size="md"
                :rounded="rounded"
                label="People"
                :items="people"
                :properties="{
                  value: 'id',
                  label: 'name',
                  sublabel: 'text',
                  media: 'media',
                }"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'label'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow
            label="Image"
            label-align="end"
            class="relative focus-within:z-[2]"
          >
            <div class="flex max-w-2xl flex-wrap items-end gap-3 pt-5">
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label-float
                  label="Framework"
                  placeholder="Select a framework"
                  fixed
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label-float
                  label="Framework"
                  placeholder="Select a framework"
                  fixed
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label-float
                  label="Framework"
                  placeholder="Select a framework"
                  fixed
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow
            label="Error"
            label-align="end"
            class="relative focus-within:z-[2]"
          >
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  error="Please select a value"
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  error="Please select a value"
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  error="Please select a value"
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Loading"
            label-align="end"
            class="relative focus-within:z-[2]"
          >
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  loading
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  loading
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  loading
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow
            label="Disabled"
            label-align="end"
            class="relative focus-within:z-[2]"
          >
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  disabled
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  disabled
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
              <div class="flex-1">
                <BaseListbox
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  disabled
                  label="Framework"
                  placeholder="Select a framework"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
