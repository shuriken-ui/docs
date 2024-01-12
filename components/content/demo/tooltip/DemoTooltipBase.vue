<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 px-6 py-16 dark:bg-muted-900">
      <div class="flex w-full items-center">
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
