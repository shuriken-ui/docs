<script setup lang="ts">
import { components } from '~/constants/components'

const activeTab = ref('nuxt')

const handleTabs = (tab: string) => {
  activeTab.value = tab
}

const url = computed(() => {
  return `/docs/reference/${activeTab.value}`
})
</script>

<template>
  <Section>
    <div class="relative -mt-12">
      <div class="sticky top-14 z-[5] mb-8 flex justify-center gap-10 border-b border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900 lg:top-0 lg:z-10">
        <button
          type="button"
          class="flex items-center gap-2 border-b-2 py-4 pe-2 transition-all duration-300"
          :class="activeTab === 'nuxt' ? 'border-muted-900 dark:border-white' : 'border-transparent opacity-60 grayscale'"
          @click="handleTabs('nuxt')"
        >
          <Icon name="logos:nuxt-icon" class="h-6 w-6" />
          <BaseText size="sm" weight="medium">
            Nuxt
          </BaseText>
        </button>
        <button
          type="button"
          class="flex items-center gap-2 border-b-2 py-4 pe-2 transition-all duration-300"
          :class="activeTab === 'react' ? 'border-muted-900 dark:border-white' : 'border-transparent opacity-60 grayscale'"
          @click="handleTabs('react')"
        >
          <Icon name="logos:react" class="h-6 w-6" />
          <BaseText size="sm" weight="medium">
            React
          </BaseText>
        </button>
        <button
          type="button"
          class="flex items-center gap-2 border-b-2 py-4 pe-2 transition-all duration-300"
          :class="activeTab === 'tailwind' ? 'border-muted-900 dark:border-white' : 'border-transparent opacity-60 grayscale'"
          @click="handleTabs('tailwind')"
        >
          <Icon name="logos:tailwindcss-icon" class="h-6 w-6" />
          <BaseText size="sm" weight="medium">
            Tailwind
          </BaseText>
        </button>
      </div>
      <div class="relative z-[4] grid grid-cols-1 gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="component in components"
          :key="component.name"
          :to="`${url}${component.url}`"
          class="group/link block"
          :class="component.availableIn.includes(activeTab) ? '' : 'hidden'"
        >
          <BaseCard
            color="default-contrast"
            rounded="lg"
            shadow="hover"
            class="relative p-4 group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100"
          >
            <div class="rounded-xl bg-muted-100 dark:bg-muted-800/50">
              <NuxtImg
                loading="lazy"
                decoding="async"
                :src="component.image.light"
                alt=""
                class="block w-full dark:hidden"
              />
              <NuxtImg
                loading="lazy"
                decoding="async"
                :src="component.image.dark"
                alt=""
                class="hidden w-full dark:block"
              />
            </div>
            <div class="mt-3">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                class="capitalize text-muted-900 dark:text-white"
              >
                {{ component.name }}
              </BaseHeading>
              <BaseParagraph
                size="xs"
                lead="relaxed"
                class="mt-1 text-muted-600 dark:text-muted-400"
              >
                {{ component.description }}
              </BaseParagraph>
            </div>
            <div class="mt-3 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  v-if="activeTab === 'nuxt'"
                  name="logos:nuxt-icon"
                  class="h-4 w-4"
                />
                <Icon
                  v-else-if="activeTab === 'react'"
                  name="logos:react"
                  class="h-4 w-4"
                />
                <Icon
                  v-else-if="activeTab === 'tailwind'"
                  name="logos:tailwindcss-icon"
                  class="h-4 w-4"
                />
                <BaseText
                  v-if="activeTab === 'nuxt'"
                  size="xs"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Nuxt
                </BaseText>
                <BaseText
                  v-else-if="activeTab === 'react'"
                  size="xs"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-400"
                >
                  React/Next.js
                </BaseText>
                <BaseText
                  v-else-if="activeTab === 'tailwind'"
                  size="xs"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Tailwind
                </BaseText>
              </div>
              <div class="flex items-center gap-2">
                <BaseTag
                  v-if="component.requiresTailwind && activeTab !== 'tailwind'"
                  size="sm"
                  rounded="full"
                  data-nui-tooltip="requires @shuriken-ui/tailwind"
                >
                  <Icon name="logos:tailwindcss-icon" class="h-4 w-4" />
                </BaseTag>
                <BaseTag size="sm" rounded="full">
                  {{ component.category }}
                </BaseTag>
              </div>
            </div>
          </BaseCard>
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>
