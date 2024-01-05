<script setup lang="ts">
import { switchColorShades } from '~/utils/bundles/color-switcher'
import colors from 'tailwindcss/colors'

const props = defineProps<{
  open?: boolean
}>()

const { rounded } = usePlayground()

const currentPrimary = ref('violet')
const currentMuted = ref('slate')

const primaryPresets = [
  {
    name: 'cyan',
    label: 'Cyan',
    shades: colors.cyan,
    class: 'bg-cyan-500',
  },
  {
    name: 'sky',
    label: 'Sky',
    shades: colors.sky,
    class: 'bg-sky-500',
  },
  {
    name: 'blue',
    label: 'Blue',
    shades: colors.blue,
    class: 'bg-blue-500',
  },
  {
    name: 'indigo',
    label: 'Indigo',
    shades: colors.indigo,
    class: 'bg-indigo-500',
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
    name: 'green',
    label: 'Green',
    shades: colors.green,
    class: 'bg-green-500',
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
    name: 'red',
    label: 'Red',
    shades: colors.red,
    class: 'bg-red-500',
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
    name: 'amber',
    label: 'Amber',
    shades: colors.amber,
    class: 'bg-amber-500',
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

function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.shades)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.shades)
}

const emit = defineEmits(['close'])
</script>

<template>
  <BaseCard
    color="white-contrast"
    rounded="lg"
    shadow="flat"
    class="p-6 fixed z-40 top-20 md:top-20 end-4 md:end-6 w-[calc(100%_-_32px)] md:w-[380px] lg:w-full lg:static"
    :class="props.open ? 'translate-x-0' : 'translate-x-[480px] lg:translate-x-0'"
  >
    <div class="flex items-center mb-6">
      <BaseHeading as="h3" size="md">Configuration</BaseHeading>
      <div class="ms-auto lg:hidden">
        <BaseButtonIcon size="sm" rounded="md" @click="emit('close')">
          <Icon name="lucide:x" class="w-4 h-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <div class="mb-3">
      <BaseHeading as="h4" size="sm" weight="medium" class="text-muted-700 dark:text-muted-200">Primary color</BaseHeading>
    </div>
    <div class="flex flex-wrap gap-x-3 gap-y-1 mb-6">
      <div v-for="color in primaryPresets" :key="color.name">
        <button
          type="button"
          class="h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-200"
          :class="[currentPrimary === color.name ? 'ring-muted-800 dark:ring-muted-100 relative z-10 ring-1' : 'ring-0']"
          @click="() => switchPrimary(color)"
        >
          <span class="block h-6 w-6 shrink-0 rounded-full" :class="color.class" :data-nui-tooltip="color.label" />
        </button>
      </div>
    </div>
    <div class="mb-3">
      <BaseHeading as="h4" size="sm" weight="medium" class="text-muted-700 dark:text-muted-200">Gray shade</BaseHeading>
    </div>
    <div class="flex flex-wrap gap-x-3 gap-y-2 mb-6">
      <div v-for="color in mutedPresets" :key="color.name">
        <button
          type="button"
          class="h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-200"
          :class="[currentMuted === color.name ? 'ring-muted-800 dark:ring-muted-100 relative z-10 ring-1' : 'ring-0']"
          @click="() => switchMuted(color)"
        >
          <span class="block h-6 w-6 shrink-0 rounded-full" :class="color.class" :data-nui-tooltip="color.label" />
        </button>
      </div>
    </div>
    <div class="flex items-center gap-3 mb-6">
      <BaseThemeSwitch />
      <div>
        <BaseHeading as="h5" size="sm" weight="medium" class="text-muted-700 dark:text-muted-200">Dark/Light mode</BaseHeading>
        <BaseParagraph size="xs" class="text-muted-400 dark:text-muted-500">Switch between light and dark mode.</BaseParagraph>
      </div>
    </div>
    <div class="mb-3">
      <BaseHeading as="h4" size="sm" weight="medium" class="text-muted-700 dark:text-muted-200">Border radius</BaseHeading>
    </div>
    <div class="w-full flex gap-2 mb-6">
      <button type="button" class="flex-1 flex items-center justify-center" @click="rounded = 'none'">
        <span class="flex flex-col items-center gap-1">
          <span class="w-10 h-10 flex items-center justify-center bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 rounded-lg">
            <RoundedNone class="w-6 h-6" :class="rounded === 'none' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans font-medium text-xs" :class="rounded === 'none' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">none</span>
        </span>
      </button>
      <button type="button" class="flex-1 flex items-center justify-center" @click="rounded = 'sm'">
        <span class="flex flex-col items-center gap-1">
          <span class="w-10 h-10 flex items-center justify-center bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 rounded-lg">
            <RoundedSm class="w-6 h-6" :class="rounded === 'sm' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans font-medium text-xs" :class="rounded === 'sm' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">sm</span>
        </span></button
      ><button type="button" class="flex-1 flex items-center justify-center" @click="rounded = 'md'">
        <span class="flex flex-col items-center gap-1">
          <span class="w-10 h-10 flex items-center justify-center bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 rounded-lg">
            <RoundedMd class="w-6 h-6" :class="rounded === 'md' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans font-medium text-xs" :class="rounded === 'md' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">md</span>
        </span>
      </button>
      <button type="button" class="flex-1 flex items-center justify-center" @click="rounded = 'lg'">
        <span class="flex flex-col items-center gap-1">
          <span class="w-10 h-10 flex items-center justify-center bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 rounded-lg">
            <RoundedLg class="w-6 h-6" :class="rounded === 'lg' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans font-medium text-xs" :class="rounded === 'lg' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">lg</span>
        </span>
      </button>
      <button type="button" class="flex-1 flex items-center justify-center" @click="rounded = 'full'">
        <span class="flex flex-col items-center gap-1">
          <span class="w-10 h-10 flex items-center justify-center bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 rounded-lg">
            <RoundedFull class="w-6 h-6" :class="rounded === 'full' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans font-medium text-xs" :class="rounded === 'full' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">full</span>
        </span>
      </button>
    </div>
    <div>
      <BaseButton color="none" size="md" class="w-full bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white">Generate Configuration</BaseButton>
    </div>
  </BaseCard>
</template>
