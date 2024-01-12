<script setup lang="ts">
import { components } from '~/constants/components'

const activeTab = ref('nuxt')

const handleTabs = (tab: string) => {
  activeTab.value = tab
}

const url = computed(() => {
  return `/docs/${activeTab.value}`
})
</script>

<template>
  <Section>
    <div class="max-w-2xl mx-auto text-center">
      <BaseParagraph size="md" weight="semibold" class="text-primary-600">Component Library</BaseParagraph>
      <BaseHeading as="h2" size="3xl" weight="semibold" class="mt-4 sm:!text-4xl lg:!text-5xl tracking-light text-muted-900 dark:text-white"
        >More than <span class="text-primary-500">{{ components.length }}+</span> components available out of the box
      </BaseHeading>
    </div>

    <div class="relative mt-12">
      <div class="sticky top-16 z-10 bg-white dark:bg-muted-900 flex justify-center gap-10 mb-8 border-b border-muted-200 dark:border-muted-800">
        <button
          type="button"
          class="flex items-center gap-2 py-4 pe-2 border-b-2 transition-all duration-300"
          :class="activeTab === 'nuxt' ? 'border-muted-900 dark:border-white' : 'border-transparent opacity-60 grayscale'"
          @click="handleTabs('nuxt')"
        >
          <Icon name="logos:nuxt-icon" class="w-6 h-6" />
          <BaseText size="sm" weight="medium">Nuxt</BaseText>
        </button>
        <button
          type="button"
          class="flex items-center gap-2 py-4 pe-2 border-b-2 transition-all duration-300"
          :class="activeTab === 'react' ? 'border-muted-900 dark:border-white' : 'border-transparent opacity-60 grayscale'"
          @click="handleTabs('react')"
        >
          <Icon name="logos:react" class="w-6 h-6" />
          <BaseText size="sm" weight="medium">React</BaseText>
        </button>
        <button
          type="button"
          class="flex items-center gap-2 py-4 pe-2 border-b-2 transition-all duration-300"
          :class="activeTab === 'tailwind' ? 'border-muted-900 dark:border-white' : 'border-transparent opacity-60 grayscale'"
          @click="handleTabs('tailwind')"
        >
          <Icon name="logos:tailwindcss-icon" class="w-6 h-6" />
          <BaseText size="sm" weight="medium">Tailwind</BaseText>
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink v-for="component in components" :key="component.name" :to="`${url}${component.url}`" class="block group/link" :class="component.availableIn.includes(activeTab) ? '' : 'hidden'">
          <BaseCard color="white-contrast" rounded="lg" shadow="hover" class="relative p-4 group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100">
            <div class="bg-muted-100 dark:bg-muted-800/50 rounded-xl">
              <NuxtImg  loading="lazy" decoding="async" :src="component.image.light" alt="" class="w-full block dark:hidden" />
              <NuxtImg  loading="lazy" decoding="async" :src="component.image.dark" alt="" class="w-full hidden dark:block" />
            </div>
            <div class="mt-3">
              <BaseHeading as="h3" size="md" weight="semibold" class="capitalize text-muted-900 dark:text-white">{{ component.name }}</BaseHeading>
              <BaseParagraph size="xs" lead="relaxed" class="mt-1 text-muted-600 dark:text-muted-400">{{ component.description }}</BaseParagraph>
            </div>
            <div class="mt-3 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <Icon v-if="activeTab === 'nuxt'" name="logos:nuxt-icon" class="w-4 h-4" />
                <Icon v-else-if="activeTab === 'react'" name="logos:react" class="w-4 h-4" />
                <Icon v-else-if="activeTab === 'tailwind'" name="logos:tailwindcss-icon" class="w-4 h-4" />
                <BaseText v-if="activeTab === 'nuxt'" size="xs" weight="medium" class="text-muted-600 dark:text-muted-400">Nuxt</BaseText>
                <BaseText v-else-if="activeTab === 'react'" size="xs" weight="medium" class="text-muted-600 dark:text-muted-400">React/Next.js</BaseText>
                <BaseText v-else-if="activeTab === 'tailwind'" size="xs" weight="medium" class="text-muted-600 dark:text-muted-400">Tailwind</BaseText>
              </div>
              <div class="flex items-center gap-2">
                <BaseTag v-if="component.requiresTailwind && activeTab !== 'tailwind'" size="sm" rounded="full" data-nui-tooltip="requires @shuriken-ui/tailwind">
                  <Icon name="logos:tailwindcss-icon" class="w-4 h-4" />
                </BaseTag>
                <BaseTag size="sm" rounded="full">{{ component.category }}</BaseTag>
              </div>
            </div>
          </BaseCard>
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>
