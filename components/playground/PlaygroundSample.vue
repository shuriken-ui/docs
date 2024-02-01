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
    <div class="mb-6 flex items-center">
      <BaseHeading
        as="h3"
        size="xl"
        lead="none"
        class="tracking-wide text-muted-800 dark:text-muted-100"
      >
        {{ props.title }}
      </BaseHeading>
      <div v-if="props.component && props.category" class="pointer-events-none ms-auto opacity-0 transition-opacity duration-300 group-hover/sample:pointer-events-auto group-hover/sample:opacity-100">
        <BaseDropdown
          variant="button"
          label="Dropdown"
          orientation="end"
          size="md"
        >
          <template #button>
            <div
              role="button"
              tabindex="0"
              class="nui-focus flex h-8 items-center gap-1 rounded-full px-3 hover:bg-muted-100 dark:hover:bg-muted-900"
            >
              <BaseText
                size="xs"
                weight="medium"
                class=""
              >
                View in docs
              </BaseText>
            </div>
          </template>
          <BaseDropdownItem
            v-if="props.availableIn?.includes('nuxt')"
            :to="`/docs/reference/nuxt/components/${props.component.toLowerCase()}`"
            :title="`<${props.component.split('-').join('')} />`"
            text="Nuxt documentation"
            color="default"
            rounded="sm"
          >
            <template #start>
              <Icon name="logos:nuxt-icon" class="h-5 w-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem
            v-if="props.availableIn?.includes('react')"
            :to="`/docs/reference/react/components/${props.component.toLowerCase()}`"
            :title="`<${props.component.split('-').join('')} />`"
            text="React documentation"
            color="default"
            rounded="sm"
          >
            <template #start>
              <Icon name="logos:react" class="h-5 w-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem
            v-if="props.availableIn?.includes('tailwind')"
            :to="`/docs/reference/tailwind/components/${props.component.toLowerCase()}`"
            :title="`<${props.component.split('-').join('')} />`"
            text="Tailwind documentation"
            color="default"
            rounded="sm"
          >
            <template #start>
              <Icon name="logos:tailwindcss-icon" class="h-5 w-5" />
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
