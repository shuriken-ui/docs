<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref('')

const fields = reactive({
  first: '',
  second: '',
  third: '',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])

interface Hobby {
  id: number
  name: string
  text: string
  icon: string
}

const hobbyValue = ref<Hobby>()
const hobbies = ref<Hobby[]>([
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
])

function filterPeople(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}

interface Person {
  id: number
  name: string
  text: string
  media: string
}

const people = ref<Person[]>([
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
])
const personValue = ref<Person>()

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}
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
          <PlaygroundSampleRow label="Default" label-align="center">
            <div class="w-full max-w-xs">
              <BaseAutocomplete
                v-model="value"
                :items="frameworks"
                contrast="default"
                :rounded="rounded"
                label="Framework"
                placeholder="Ex: javascript"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="center">
            <div class="w-full max-w-xs">
              <BaseAutocomplete
                v-model="value"
                :items="frameworks"
                contrast="default-contrast"
                :rounded="rounded"
                label="Framework"
                placeholder="Ex: javascript"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted" label-align="center">
            <div class="w-full max-w-xs">
              <BaseAutocomplete
                v-model="value"
                :items="frameworks"
                contrast="muted"
                :rounded="rounded"
                label="Framework"
                placeholder="Ex: javascript"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="center">
            <div class="w-full max-w-xs">
              <BaseAutocomplete
                v-model="value"
                :items="frameworks"
                contrast="muted-contrast"
                :rounded="rounded"
                label="Framework"
                placeholder="Ex: javascript"
                fixed
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Simple" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Icons" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  icon="lucide:search"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  icon="lucide:search"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  icon="lucide:search"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'media'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow
            label="Icons"
            label-align="center"
            class="relative z-[2]"
          >
            <div class="max-w-xs">
              <BaseAutocomplete
                v-model="hobbyValue"
                :items="hobbies"
                :display-value="(item: Hobby) => item.name"
                :filter-items="filterItems"
                icon="ph:buildings"
                rounded="md"
                placeholder="Select a hobby"
                label="Company"
                clearable
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
          <PlaygroundSampleRow label="Images" label-align="center">
            <div class="max-w-xs">
              <BaseAutocomplete
                v-model="personValue"
                :items="people"
                :display-value="(item: Person) => item.name"
                :filter-items="filterPeople"
                icon="ph:users-three"
                rounded="md"
                placeholder="Search..."
                label="Assignee"
                clearable
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
          <PlaygroundSampleRow label="Float" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3 pt-5">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                  label-float
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                  label-float
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                  label-float
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Clearable" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                  clearable
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                  clearable
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                  clearable
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Error" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                  error="Please select a value"
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                  error="Please select a value"
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                  error="Please select a value"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Loading" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                  loading
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                  loading
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                  loading
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.first"
                  :items="frameworks"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: javascript"
                  fixed
                  disabled
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.second"
                  :items="frameworks"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: javascript"
                  fixed
                  disabled
                />
              </div>

              <div class="flex-1">
                <BaseAutocomplete
                  v-model="fields.third"
                  :items="frameworks"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: javascript"
                  fixed
                  disabled
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
