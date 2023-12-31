<script setup lang="ts">
const props = defineProps<{
  category: 'base' | 'form' | 'layout'
  fileName: string
}>()

const sourceUrl = ref(`${process.env.NUXT_COMPONENTS_GITHUB_URL}/${props.category}/${props.fileName}`)
const issueUrl = ref(`${process.env.NUXT_ISSUES_GITHUB_URL}`)

const route = useRoute()
// Refresh computed properties on route change
watch(() => route.path, () => {
  sourceUrl.value = `${process.env.NUXT_COMPONENTS_GITHUB_URL}/${props.category}/${props.fileName}`
  issueUrl.value = `${process.env.NUXT_ISSUES_GITHUB_URL}`
})
</script>

<template>
  <div class="pb-6">
    <div class="flex flex-wrap md:flex-nowrap md:items-center gap-4">
      <BaseTag rounded="full">Category: <span class="capitalize">{{ props.category }}</span></BaseTag>
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