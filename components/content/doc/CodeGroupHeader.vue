<script lang="ts" setup>
const props = defineProps<{
  hasPreview?: boolean
  activeTabIndex: number
  tabs: {
    filename?: string
    language?: string
    code?: string
    active?: boolean
    component: any
  }[]
}>()

const activeTabIndex = useVModel(props, 'activeTabIndex')

const { copy, copied, isSupported } = useClipboard({
  source: () => activeTab.value?.code ?? '',
})
const activeTab = computed(() => props.tabs[activeTabIndex.value])
</script>

<template>
  <div class="flex gap-2 bg-white dark:bg-muted-800 border-b border-muted-300 dark:border-muted-800">
    <button
      v-for="(tab, index) in props.tabs"
      :key="index"
      type="button"
      tabindex="0"
      class="group/button text-sm"
      :class="[
        tabs.length > 1 ? 'border-b-2' : 'cursor-default',
        tabs.length > 1 && index === activeTabIndex ? 'border-muted-800 dark:border-muted-100' : 'border-transparent',
        index === activeTabIndex ? 'font-medium text-muted-800 dark:text-muted-100' : 'text-muted-400 hover:text-muted-500 dark:hover:text-muted-300',
      ]"
      @click="() => (activeTabIndex = index)"
      @keydown.enter.prevent="() => (activeTabIndex = index)"
    >
      <span v-if="tab.filename" class="block m-1 py-1 px-3 rounded-md" :class="[tabs.length > 1 ? 'group-hover/button:bg-muted-100 dark:group-hover/button:bg-muted-900' : '']">
        {{ tab.filename?.replaceAll('⦋', '[')?.replaceAll('⦌', ']') }}
      </span>
    </button>

    <div
      v-if="isSupported"
      class="absolute mt-12 z-[2] opacity-0 group-hover/code:opacity-100 pointer-events-none group-hover/code:pointer-events-auto transition-opacity duration-300"
      :class="hasPreview ? 'end-4' : 'end-2'"
    >
      <BaseButtonIcon size="sm" shape="smooth" :data-nui-tooltip="copied ? 'Copied!' : 'Copy'" data-nui-tooltip-position="start" :aria-label="copied ? 'Copied!' : 'Copy'" @click="() => copy()">
        <Icon v-if="!copied" name="lucide:copy" class="w-4 h-4" />
        <Icon v-else name="lucide:check" class="w-4 h-4 text-success-500" />
      </BaseButtonIcon>
    </div>
    <div class="absolute mt-1.5 z-[2]" :class="hasPreview ? 'end-5' : 'end-3'">
      <span v-if="activeTab.language" class="text-xs font-medium text-muted-500">
        {{ activeTab.language }}
      </span>
    </div>
  </div>
</template>
