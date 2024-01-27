<script lang="ts" setup>
const props = defineProps<{
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
  <div class="mb-6 flex gap-2 border-b border-muted-300 dark:border-muted-800">
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
      <span
        v-if="tab.filename"
        class="m-1 block rounded-md px-3 py-1"
        :class="[tabs.length > 1 ? 'group-hover/button:bg-muted-100 dark:group-hover/button:bg-muted-900' : '']"
      >
        {{ tab.filename?.replaceAll('⦋', '[')?.replaceAll('⦌', ']') }}
      </span>
    </button>
  </div>
</template>
