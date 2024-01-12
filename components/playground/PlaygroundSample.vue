<script setup lang="ts">
const props = defineProps<{
  title: string
  component?: string
  category?: string
  availableIn?: string[]
}>()
</script>

<template>
  <div class="group/sample relative">
    <div class="flex items-center mb-6">
      <BaseHeading as="h3" size="xl" lead="none" class="tracking-wide text-muted-800 dark:text-muted-100">{{ props.title }}</BaseHeading>
      <div v-if="props.component && props.category" class="ms-auto opacity-0 pointer-events-none group-hover/sample:opacity-100 group-hover/sample:pointer-events-auto transition-opacity duration-300">
        <BaseDropdown variant="button" label="Dropdown" orientation="end" size="md">
            <template #button>
              <div role="button" tabindex="0" class="nui-focus h-8 px-3 flex items-center gap-1 rounded-full hover:bg-muted-100 dark:hover:bg-muted-900">
                <BaseText size="xs" weight="medium" class="">View in docs</BaseText>
              </div>
            </template>
            <BaseDropdownItem v-if="props.availableIn?.includes('nuxt')" :to="`/docs/nuxt/${props.category}/${props.component.toLowerCase()}`" :title="`<${props.component.split('-').join('')} />`" text="Nuxt documentation" color="default" rounded="sm">
              <template #start>
                <Icon name="logos:nuxt-icon" class="w-5 h-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem v-if="props.availableIn?.includes('react')" :to="`/docs/react/${props.category}/${props.component.toLowerCase()}`" :title="`<${props.component.split('-').join('')} />`" text="React documentation" color="default" rounded="sm">
              <template #start>
                <Icon name="logos:react" class="w-5 h-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem v-if="props.availableIn?.includes('tailwind')" :to="`/docs/tailwind/${props.category}/${props.component.toLowerCase()}`" :title="`<${props.component.split('-').join('')} />`" text="Tailwind documentation" color="default" rounded="sm">
              <template #start>
                <Icon name="logos:tailwindcss-icon" class="w-5 h-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
