<script setup lang="ts">
const props = defineProps<{
  to: string
  src: string
  srcDark?: string
  title?: string
  text?: string
}>()
</script>

<template>
  <div class="py-6">
    <BaseCard color="white-contrast" shape="curved" class="relative flex flex-col overflow-hidden rounded-xl text-start !border-muted-300 dark:!border-muted-800">
      <div class="bg-muted-100 dark:bg-muted-900/40 relative">
        <img
          :src="props.src"
          class="block w-full dark:hidden"
          alt="Tairo - Multipurpose Nuxt/Tailwind UI Kit"
          width="717"
          height="384"
          loading="lazy"
          decoding="async"
        />
        <img v-if="props.srcDark"
          :src="props.srcDark"
          class="hidden w-full dark:block"
          alt="Tairo - Multipurpose Nuxt/Tailwind UI Kit"
          width="717"
          height="384"
          loading="lazy"
          decoding="async"
        />
        <NuxtLink
          :to="props.to"
          class="border-muted-200 text-muted-600 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 hover:border-primary-500 dark:bg-muted-950 dark:border-muted-800 dark:hover:border-primary-500 absolute start-6 top-6 inline-flex items-center gap-1 rounded-full border bg-white px-5 py-2 transition-colors duration-300"
        >
          <span class="font-sans text-sm">Live Preview</span>
          <Icon name="lucide:arrow-right" class="h-3 w-3" />
        </NuxtLink>
      </div>
      <div class="relative flex grow flex-col px-8 pb-8 pt-4">
        <div class="absolute -top-8 start-0 z-10 h-6 w-full bg-white blur-md dark:hidden"></div>
        <div class="mt-auto space-y-2">
          <BaseHeading v-if="'title' in $slots || props.title" weight="light">
            <ContentSlot :use="$slots.title" unwrap="p">
              {{ props.title }}
            </ContentSlot>
          </BaseHeading>
          <BaseParagraph v-if="'text' in $slots || props.text" size="sm" class="text-muted-500 dark:text-muted-400">
            <ContentSlot :use="$slots.text" unwrap="p">
              {{ props.text }}
            </ContentSlot>
          </BaseParagraph>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
