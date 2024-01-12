<script setup lang="ts">
const props = defineProps<{
  version: string
  releaseDate: string
  breaking?: boolean
}>()
</script>

<template>
  <div class="relative mb-20 border-b border-muted-200 pb-20 last:border-none dark:border-muted-800">
    <div class="relative">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-4 ltablet:col-span-4">
          <div class="relative mt-6 flex h-full flex-col">
            <div class="top-36 flex items-center justify-between lg:sticky lg:flex-col lg:items-start ltablet:sticky ltablet:flex-col ltablet:items-start ltablet:justify-between">
              <div class="flex items-center gap-2">
                <BaseTag
                  variant="pastel"
                  color="primary"
                  rounded="full"
                  class="min-w-[4rem] text-center font-medium"
                >
                  {{ props.version }}
                </BaseTag>
                <span
                  v-if="props.breaking"
                  class="flex h-2 w-2"
                  data-nui-tooltip="This release has breaking changes"
                  data-nui-tooltip-position="end"
                >
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-danger-400 opacity-75" />
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-danger-500" />
                </span>
              </div>
              <BaseParagraph size="sm" class="px-1 leading-loose text-muted-500 dark:text-muted-400 lg:mt-2 lg:leading-normal ltablet:mt-2 ltablet:leading-normal">
                {{ props.releaseDate }}
              </BaseParagraph>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8 ltablet:col-span-8">
          <div class="relative">
            <ContentSlot :use="$slots.default" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
