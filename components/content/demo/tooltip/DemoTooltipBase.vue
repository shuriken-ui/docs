<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl px-6 py-16">
      <div class="flex items-center w-full">
        <div class="flex flex-wrap gap-3">
          <BaseTag
            rounded="full"
            data-nui-tooltip="Top tooltip&#xa; the second line&#xa; the third line"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="down"
            data-nui-tooltip="Bottom tooltip"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="start"
            data-nui-tooltip="Start tooltip"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="end"
            data-nui-tooltip="End tooltip"
          >
            Hover/Focus Me
          </BaseTag>
        </div>
      </div>
    </div>
  </div>
</template>