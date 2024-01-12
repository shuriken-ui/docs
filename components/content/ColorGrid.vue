<template>
  <div class="py-6">
    <div class="flex w-full flex-wrap items-center gap-1 rounded-md border border-muted-300 p-1 dark:border-muted-800 md:h-12">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>
