<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to load available layouts.
 * We also load colors from Tailwind and Shuriken UI.
 * We use the switchColorShades() function to dynamically change the colors.
 */
import { switchColorShades } from '~/utils/bundles/color-switcher'
import colors from 'tailwindcss/colors'

const route = useRoute()
const isSwitcherOpen = useState('switcher-open', () => false)
const currentPrimary = ref('violet')
const currentMuted = ref('slate')

// Close the modal when the primary or muted color changes
watch([currentPrimary, currentMuted], closeModal)

const primaryPresets = [
  {
    name: 'indigo',
    label: 'Indigo',
    shades: colors.indigo,
    class: 'bg-indigo-500',
  },
  {
    name: 'sky',
    label: 'Sky',
    shades: colors.sky,
    class: 'bg-sky-500',
  },
  {
    name: 'fuchsia',
    label: 'Fuchsia',
    shades: colors.fuchsia,
    class: 'bg-fuchsia-500',
  },
  {
    name: 'purple',
    label: 'Purple',
    shades: colors.purple,
    class: 'bg-purple-500',
  },
  {
    name: 'violet',
    label: 'Violet',
    shades: colors.violet,
    class: 'bg-violet-500',
  },
  {
    name: 'lime',
    label: 'Lime',
    shades: colors.lime,
    class: 'bg-lime-500',
  },
  {
    name: 'teal',
    label: 'Teal',
    shades: colors.teal,
    class: 'bg-teal-500',
  },
  {
    name: 'emerald',
    label: 'Emerald',
    shades: colors.emerald,
    class: 'bg-emerald-500',
  },
  {
    name: 'rose',
    label: 'Rose',
    shades: colors.rose,
    class: 'bg-rose-500',
  },
  {
    name: 'pink',
    label: 'Pink',
    shades: colors.pink,
    class: 'bg-pink-500',
  },
  {
    name: 'yellow',
    label: 'Yellow',
    shades: colors.yellow,
    class: 'bg-yellow-500',
  },
  {
    name: 'orange',
    label: 'Orange',
    shades: colors.orange,
    class: 'bg-orange-500',
  },
  {
    name: 'mauve',
    label: 'Custom',
    shades: {
      50: '#EEECF9',
      100: '#DCD8F3',
      200: '#B6AEE5',
      300: '#9488D8',
      400: '#6E5DCB',
      500: '#4E3CB9',
      600: '#3E2F92',
      700: '#302470',
      800: '#1F1849',
      900: '#100C27',
      950: '#080613',
    },
    class: 'bg-mauve-500',
  },
] as const

const mutedPresets = [
  {
    name: 'gray',
    label: 'Gray',
    shades: colors.gray,
    class: 'bg-gray-300 dark:bg-gray-900',
  },
  {
    name: 'slate',
    label: 'Slate',
    shades: colors.slate,
    class: 'bg-slate-300 dark:bg-slate-900',
  },
  {
    name: 'stone',
    label: 'Stone',
    shades: colors.stone,
    class: 'bg-stone-300 dark:bg-stone-900',
  },
  {
    name: 'zinc',
    label: 'Zinc',
    shades: colors.zinc,
    class: 'bg-zinc-300 dark:bg-zinc-900',
  },
  {
    name: 'neutral',
    label: 'Neutral',
    shades: colors.neutral,
    class: 'bg-neutral-300 dark:bg-neutral-900',
  },
] as const

function closeModal() {
  isSwitcherOpen.value = false
}
function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.shades)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.shades)
}
</script>

<template>
  <Modal
    :open="isSwitcherOpen"
    rounded="lg"
    size="md"
    @close="isSwitcherOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-lg font-medium leading-6 text-muted-900 dark:text-white"
        >
          Theme configuration
        </h3>

        <BaseButtonClose
          rounded="full"
          size="sm"
          color="default"
          @click="closeModal"
        />
      </div>
    </template>

    <!-- Body -->
    <div
      class="nui-slimscroll max-h-[550px] overflow-y-auto px-4 pb-4 md:px-6 md:pb-6"
    >
      <div class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex flex-col gap-4"
        >
          <div>
            <BaseHeading
              as="h4"
              size="xs"
              weight="semibold"
              class="text-muted-900 dark:text-white"
            >
              Color selection
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-400">
              Select a primary color
            </BaseParagraph>
          </div>
          <div class="space-y-1">
            <div class="grid grid-cols-1 gap-x-4 gap-y-0 sm:grid-cols-2">
              <div v-for="color in primaryPresets" :key="color.name">
                <button
                  type="button"
                  class="group flex w-full items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-100 dark:hover:bg-muted-700/70"
                  :class="[
                    currentPrimary === color.name
                      ? 'relative z-10 ring-1 ring-primary-500'
                      : 'ring-0',
                  ]"
                  @click="() => switchPrimary(color)"
                >
                  <span
                    class="block h-6 w-6 shrink-0 rounded-lg"
                    :class="color.class"
                  />
                  <BaseText size="sm">
                    {{ color.label }}
                  </BaseText>
                </button>
              </div>
            </div>
            <hr class="!my-4 border-muted-200 dark:border-muted-700">
            <div>
              <button
                type="button"
                class="group flex w-full items-center gap-3 rounded-lg p-2"
              >
                <span
                  class="block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"
                />
                <BaseText size="sm">
                  Gray shade
                </BaseText>
              </button>
              <div class="flex items-center px-2 pt-2">
                <BaseText
                  size="xs"
                  class="text-muted-400"
                >
                  Pick a shade
                </BaseText>
                <div class="ml-auto flex items-center justify-end gap-2">
                  <button
                    v-for="color in mutedPresets"
                    :key="color.name"
                    type="button"
                    class="block h-6 w-6 rounded-full"
                    :class="[
                      color.class,
                      currentMuted === color.name
                        ? 'ring-1 ring-primary-500'
                        : 'ring-0',
                    ]"
                    :data-nui-tooltip="color.label"
                    @click="() => switchMuted(color)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
