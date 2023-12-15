<template>
  <BaseHeading as="h3" size="lg" weight="medium" :id="id" class="mt-8 mb-1 group/heading">
    <a v-if="generate" :href="`#${id}`" class="flex items-center gap-2 group-hover/heading:underline underline-offset-4">
      <slot />
      <Icon name="ph:link-simple" class="w-4 h-4 opacity-0 group-hover/heading:opacity-100 transition-opacity duration-200" />
    </a>
    <slot v-else />
  </BaseHeading>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>
