<template>
  <ol class="relative mb-16 space-y-2" style="counter-reset: step 0;">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </ol>
</template>
