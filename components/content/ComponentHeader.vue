<script setup lang="ts">
import { joinURL, withQuery } from 'ufo'

const props = withDefaults(defineProps<{
  category: string
  fileName: string
  framework?: 'nuxt' | 'react' | 'tailwind'
  storybook?: string
}>(), {
  category: 'base',
  framework: 'nuxt',
  storybook: undefined,
})

const appConfig = useAppConfig()
const githubUrl = computed(() => {
  return joinURL('https://github.com', appConfig.github.org, props.framework)
})

const issueUrl = computed(() => {
  return joinURL(githubUrl.value, 'issues')
})
const sourceUrl = computed(() => {
  return joinURL(githubUrl.value, 'tree', appConfig.github.branch, props.category, props.fileName)
})
const storybookUrl = computed(() => withQuery(appConfig.storybookUrl, {
  path: `/docs/${props.storybook}--docs/`,
}))
</script>

<template>
  <div class="pb-6">
    <div class="flex flex-wrap gap-4 md:flex-nowrap md:items-center">
      <!--BaseTag rounded="full">Category: <span class="capitalize">{{ props.category }}</span></BaseTag-->
      <NuxtLink
        v-if="props.storybook"
        :to="storybookUrl"
        target="_blank"
        rel="noopener"
        class="group/link"
        data-nui-tooltip="View examples on Storybook"
      >
        <BaseTag rounded="full" class="inline-flex w-full items-center gap-1 group-hover/link:!border-primary-500 group-hover/link:!text-primary-500">
          <Icon name="logos:storybook-icon" class="h-3 w-3" />
          <span>storybook</span>
          <Icon name="lucide:external-link" class="h-3 w-3" />
        </BaseTag>
      </NuxtLink>
      <NuxtLink
        :to="sourceUrl"
        target="_blank"
        rel="noopener"
        class="group/link"
      >
        <BaseTag rounded="full" class="inline-flex w-full items-center gap-1 group-hover/link:!border-primary-500 group-hover/link:!text-primary-500">
          <Icon name="fa6-brands:github" class="h-3 w-3" />
          <span>View Source</span>
          <Icon name="lucide:external-link" class="h-3 w-3" />
        </BaseTag>
      </NuxtLink>
      <NuxtLink
        :to="issueUrl"
        target="_blank"
        rel="noopener"
        class="group/link"
      >
        <BaseTag rounded="full" class="inline-flex w-full items-center gap-1 group-hover/link:!border-primary-500 group-hover/link:!text-primary-500">
          <Icon name="fa6-brands:github" class="h-3 w-3" />
          <span>Open Issue</span>
          <Icon name="lucide:external-link" class="h-3 w-3" />
        </BaseTag>
      </NuxtLink>
    </div>
  </div>
</template>
