<template>
  <div class="py-6">
    <div class="flex flex-wrap items-center p-1 gap-1 md:h-12 w-full rounded-md border border-muted-300 dark:border-muted-800">
      <ContentSlot :use="$slots.default" unwrap="p"></ContentSlot>
    </div>
  </div>
</template>