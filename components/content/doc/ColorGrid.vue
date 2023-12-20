<template>
  <div class="py-6">
    <div class="flex items-center px-1 gap-1 h-12 w-full rounded-md border border-muted-300 dark:border-muted-800">
      <ContentSlot :use="$slots.default" unwrap="p"></ContentSlot>
    </div>
  </div>
</template>