<template>
  <div class="py-6">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>
