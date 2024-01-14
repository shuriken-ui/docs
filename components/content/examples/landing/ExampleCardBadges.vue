<template>
  <div class="flex flex-col justify-end gap-4">
    <div class="flex flex-wrap items-end gap-x-3 gap-y-2">
      <BaseTag
        rounded="lg"
        class="bg-muted-900 text-white dark:bg-muted-950"
      >
        Badge
      </BaseTag>
      <BaseTag color="muted" rounded="lg">
        Badge
      </BaseTag>
      <BaseTag color="default" rounded="full">
        Badge
      </BaseTag>
    </div>
    <!-- Team Card -->
    <ExampleCardTeam />
  </div>
</template>
