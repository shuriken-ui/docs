<script setup lang="ts">
const props = withDefaults(defineProps<{
  category: string
  fileName: string
  framework?: 'nuxt' | 'react' | 'tailwind'
  storybook?: string
}>(), {
  category: 'base',
  framework: 'nuxt'
})

const part = computed(() => {
  if (props.framework === 'nuxt') {
    return 'https://github.com/shuriken-ui/nuxt/tree/main/components'
  } else if (props.framework === 'react') {
    return 'https://github.com/shuriken-ui/react/tree/main/ui/src/components'
  } else if (props.framework === 'tailwind') {
    return 'https://github.com/shuriken-ui/tailwind/tree/main/src/plugins'
  } else {
    return 'https://github.com/shuriken-ui/nuxt/tree/main/components'
  }
})

const sourceUrl = ref(`${part.value}/${props.category}/${props.fileName}`)
const issueUrl = ref(`https://github.com/shuriken-ui/${props.framework}/issues`)
const storybookUrl = ref(`https://656a098589ac31a8b917519a-ejjinpgpck.chromatic.com/?path=/docs/${props.storybook ?? `shuriken-ui-base-avatar`}--docs/`)
</script>

<template>
  <div class="pb-6">
    <div class="flex flex-wrap md:flex-nowrap md:items-center gap-4">
      <!--BaseTag rounded="full">Category: <span class="capitalize">{{ props.category }}</span></BaseTag-->
      <NuxtLink v-if="props.storybook" :to="storybookUrl" target="_blank" rel="noopener" class="group/link" data-nui-tooltip="View examples on Storybook">
        <BaseTag rounded="full" class="w-full inline-flex items-center gap-1 group-hover/link:!border-primary-500 group-hover/link:!text-primary-500">
          <Icon name="logos:storybook-icon" class="w-3 h-3" />
          <span>storybook</span>  
          <Icon name="lucide:external-link" class="w-3 h-3" />
        </BaseTag>
      </NuxtLink>
      <NuxtLink :to="sourceUrl" target="_blank" rel="noopener" class="group/link">
        <BaseTag rounded="full" class="w-full inline-flex items-center gap-1 group-hover/link:!border-primary-500 group-hover/link:!text-primary-500">
          <Icon name="fa6-brands:github" class="w-3 h-3" />
          <span>View Source</span>  
          <Icon name="lucide:external-link" class="w-3 h-3" />
        </BaseTag>
      </NuxtLink>
      <NuxtLink :to="issueUrl" target="_blank" rel="noopener" class="group/link">
        <BaseTag rounded="full" class="w-full inline-flex items-center gap-1 group-hover/link:!border-primary-500 group-hover/link:!text-primary-500">
          <Icon name="fa6-brands:github" class="w-3 h-3" />
          <span>Open Issue</span>  
          <Icon name="lucide:external-link" class="w-3 h-3" />
        </BaseTag>
      </NuxtLink>
    </div>
  </div>
</template>