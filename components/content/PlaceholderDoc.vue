<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  image?: string
  imageSize?: 'sm' | 'md' | 'lg' | 'xs' | 'xl'
}>()
</script>

<template>
  <div class="py-6">
    <BasePlaceholderPage
      :image-size="props.imageSize"
      :title="props.title"
      :subtitle="props.subtitle"
    >
      <template #image>
        <NuxtImg
          loading="lazy"
          decoding="async"
          class="dark:invert"
          :src="props.image"
          alt="placeholder-image"
        />
      </template>

      <div class="mt-6 flex flex-col justify-center gap-2 md:flex-row">
        <BaseInput
          icon="lucide:mail"
          rounded="md"
          placeholder="Email Address"
        />
        <BaseButton
          color="none"
          rounded="md"
          class="w-full bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 md:w-28"
        >
          Notify Me
        </BaseButton>
      </div>
    </BasePlaceholderPage>
  </div>
</template>
