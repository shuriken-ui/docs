<script setup lang="ts">
const props = defineProps<{
  version: string
  releaseDate: string
  breaking?: boolean
}>()
</script>

<template>
  <div class="relative pb-20 mb-20 border-b border-muted-200 dark:border-muted-800 last:border-none">
    <div class="relative">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
          <div class="relative h-full flex flex-col mt-6">
            <div class="ltablet:sticky lg:sticky top-36 flex items-center justify-between ltablet:flex-col ltablet:items-start ltablet:justify-between lg:flex-col lg:items-start">
              <div class="flex items-center gap-2">
                <BaseTag variant="pastel" color="primary" rounded="full" class="font-medium min-w-[4rem] text-center">{{ props.version }}</BaseTag>
                <span v-if="props.breaking" class="flex h-2 w-2" data-nui-tooltip="This release has breaking changes" data-nui-tooltip-position="end">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-danger-500"></span>
                </span>
              </div>
              <BaseParagraph size="sm" class="leading-loose ltablet:leading-normal lg:leading-normal ltablet:mt-2 lg:mt-2 px-1 text-muted-500 dark:text-muted-400">
                {{ props.releaseDate }}
              </BaseParagraph>
            </div>
          </div>
        </div>
        <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
          <div class="relative">
            <ContentSlot :use="$slots.default"></ContentSlot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
