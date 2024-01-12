<script setup lang="ts">
const props = defineProps<{
  icon?: string
  title?: string
}>()
</script>

<template>
  <div class="py-6">
    <BaseCard
      rounded="md"
      color="muted-contrast"
      class="!border-muted-300 p-4 dark:!border-muted-800 md:p-6"
    >
      <div class="flex gap-3">
        <div v-if="'icon' in $slots || props.icon">
          <ContentSlot :use="$slots.icon" unwrap="p">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              class="h-6 w-6 text-muted-500 dark:text-muted-600"
            />
          </ContentSlot>
        </div>
        <div>
          <BaseHeading
            v-if="'title' in $slots || props.title"
            as="h5"
            size="md"
            weight="medium"
            class="mb-1"
          >
            <ContentSlot :use="$slots.title" unwrap="p">
              {{ props.title }}
            </ContentSlot>
          </BaseHeading>
          <BaseParagraph
            v-if="'default' in $slots"
            size="sm"
            class="text-muted-500 dark:text-muted-400"
          >
            <ContentSlot :use="$slots.default" unwrap="p" />
          </BaseParagraph>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
