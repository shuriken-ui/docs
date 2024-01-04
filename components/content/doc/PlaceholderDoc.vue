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
    <BasePlaceholderPage :image-size="props.imageSize" :title="props.title" :subtitle="props.subtitle" >
      <template #image>
        <img class="dark:invert" :src="props.image" alt="placeholder-image" />
      </template>

      <div class="mt-6 flex flex-col md:flex-row justify-center gap-2">
        <BaseInput icon="lucide:mail" rounded="md" placeholder="Email Address" />
        <BaseButton color="none" rounded="md" class="w-full md:w-28 bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white"> Notify Me </BaseButton>
      </div>
    </BasePlaceholderPage>
  </div>
</template>
